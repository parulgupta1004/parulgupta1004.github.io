import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import {
  mkdtempSync,
  mkdirSync,
  writeFileSync,
  utimesSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import {
  createLlmsText,
  createSitemap,
  getContentModifiedAt,
} from "./crawler-artifacts.mjs";

test("sitemap dates follow content changes, not checkout times or test edits", () => {
  const root = mkdtempSync(path.join(tmpdir(), "portfolio-sitemap-"));
  const git = (args, date) =>
    execFileSync("git", args, {
      cwd: root,
      stdio: "ignore",
      env: {
        ...process.env,
        ...(date ? { GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date } : {}),
      },
    });
  try {
    git(["init"]);
    mkdirSync(path.join(root, "src"));
    const source = path.join(root, "src", "profile.js");
    writeFileSync(source, "export const name = 'Parul Gupta';");
    git(["add", "."]);
    git(
      [
        "-c",
        "user.name=Test",
        "-c",
        "user.email=test@example.com",
        "commit",
        "-m",
        "Profile",
      ],
      "2020-01-01T00:00:00Z",
    );
    utimesSync(source, new Date(), new Date());
    assert.equal(getContentModifiedAt(root), "2020-01-01T00:00:00.000Z");
    writeFileSync(path.join(root, "src", "profile.test.js"), "// test only");
    git(["add", "."]);
    git(
      [
        "-c",
        "user.name=Test",
        "-c",
        "user.email=test@example.com",
        "commit",
        "-m",
        "Test",
      ],
      "2021-01-01T00:00:00Z",
    );
    assert.equal(getContentModifiedAt(root), "2020-01-01T00:00:00.000Z");
    writeFileSync(source, "export const name = 'Updated profile';");
    const modifiedAt = new Date("2025-03-01T00:00:00Z");
    utimesSync(source, modifiedAt, modifiedAt);
    assert.equal(getContentModifiedAt(root), modifiedAt.toISOString());
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("sitemap omits unknown modification dates and escapes URLs", () => {
  const sitemap = createSitemap("https://example.com/?a=1&b=2");
  assert.ok(sitemap.includes("https://example.com/?a=1&amp;b=2"));
  assert.ok(!sitemap.includes("lastmod"));
  assert.ok(
    createSitemap("https://example.com/", "2025-03-01").includes(
      "2025-03-01T00:00:00.000Z",
    ),
  );
});

test("agent overview uses supplied profile, project, recording and archive data", () => {
  const text = createLlmsText({
    site: {
      name: "Parul Gupta",
      url: "https://example.com/",
      description: "Responsible AI and Python.",
    },
    projects: [
      {
        name: "Fair-Seldonian",
        role: "Creator",
        description: "Fairness guarantees.",
        url: "https://pypi.org/project/fair-seldonian/",
        repository: "https://github.com/parulgupta1004/fair-seldonian",
      },
    ],
    videos: [{ id: "recording", title: "Python talk", event: "Conference" }],
    engagements: {
      talks: { title: "Python talks", topics: ["Python", "AI Ethics"] },
      community: { title: "Community Engagement", topics: ["Mentoring"] },
    },
    socialMediaLinks: { github: "https://github.com/parulgupta1004" },
  });
  assert.ok(text.includes("# Parul Gupta\n"));
  assert.ok(text.includes("https://example.com/#talks"));
  assert.ok(text.includes("AI Ethics"));
  assert.ok(text.includes("Parul Gupta is a creator."));
  assert.ok(text.includes("https://github.com/parulgupta1004/fair-seldonian"));
  assert.ok(text.includes("https://www.youtube.com/watch?v=recording"));
});
