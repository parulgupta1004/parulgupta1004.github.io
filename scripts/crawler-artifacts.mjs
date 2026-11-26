import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import path from "node:path";

const contentPaths = [
  "src",
  "public",
  "index.html",
  "scripts/prerender.mjs",
  "scripts/crawler-artifacts.mjs",
];
const isContentPath = (file) =>
  !/\.test\.[cm]?[jt]sx?$/.test(file) &&
  file !== "src/test-setup.js" &&
  contentPaths.some((entry) => file === entry || file.startsWith(`${entry}/`));

export function getContentModifiedAt(root = process.cwd()) {
  const git = (args) =>
    execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  try {
    const committedAt = git([
      "log",
      "-1",
      "--format=%cI",
      "--",
      ...contentPaths,
      ":(glob,exclude)src/**/*.test.*",
      ":(exclude)src/test-setup.js",
    ]).trim();
    const dates = committedAt ? [new Date(committedAt)] : [];
    const changed = [
      ...git(["diff", "HEAD", "--name-only", "-z"]).split("\0"),
      ...git(["ls-files", "--others", "--exclude-standard", "-z"]).split("\0"),
    ];
    for (const file of new Set(changed.filter(isContentPath))) {
      try {
        dates.push(statSync(path.join(root, file)).mtime);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
    return dates.length
      ? new Date(Math.max(...dates.map(Number))).toISOString()
      : undefined;
  } catch {
    // Source exports may lack Git history. Omit lastmod rather than invent it.
    return undefined;
  }
}

export function createSitemap(url, modifiedAt) {
  const escapedUrl = url
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  const lastmod = modifiedAt
    ? `\n    <lastmod>${new Date(modifiedAt).toISOString()}</lastmod>`
    : "";
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapedUrl}</loc>${lastmod}
  </url>
</urlset>
`;
}

export function createLlmsText({
  site,
  projects,
  videos,
  engagements,
  socialMediaLinks,
}) {
  return [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "The portfolio's HTML contains the complete talk and community archives without requiring JavaScript. Project download counts are dated PyPI Stats snapshots, not live totals.",
    "",
    "## Portfolio",
    "",
    `- [Profile](${site.url}): Biography, open source projects, talks and community work.`,
    `- [${engagements.talks.title}](${site.url}#talks): Topics include ${engagements.talks.topics.join(", ")}.`,
    `- [${engagements.community.title}](${site.url}#community): ${engagements.community.topics.join(", ")}.`,
    "",
    "## Open source projects",
    "",
    ...projects.flatMap((project) => [
      `- [${project.name}](${project.url}): ${site.name} is a ${project.role.toLowerCase()}. ${project.description}`,
      `- [${project.name} source code](${project.repository})`,
    ]),
    "",
    "## Selected recordings",
    "",
    ...videos.map(
      (video) =>
        `- [${video.title}](https://www.youtube.com/watch?v=${video.id}): ${video.event}.`,
    ),
    "",
    "## Profiles",
    "",
    ...Object.entries(socialMediaLinks).map(
      ([name, url]) =>
        `- [${{ github: "GitHub", linkedin: "LinkedIn", instagram: "Instagram", google_dev: "Google Developer" }[name] || name}](${url})`,
    ),
    "",
  ].join("\n");
}
