const { test } = require("node:test");
const assert = require("node:assert/strict");
const { refreshStats } = require("./update-pypi-stats.cjs");

const previous = {
  fairlearn: {
    lastMonth: 100,
    asOf: "2026-11-24",
    source: "https://pypistats.org/packages/fairlearn",
  },
  "fair-seldonian": {
    lastMonth: 10,
    asOf: "2026-11-24",
    source: "https://pypistats.org/packages/fair-seldonian",
  },
};
const now = new Date("2026-11-25T08:17:00Z");
const logger = { log() {}, warn() {} };
const response = (name, count) => ({
  ok: true,
  json: async () => ({
    package: name,
    type: "recent_downloads",
    data: { last_month: count },
  }),
});

test("refreshes configured packages, including a legitimate zero count", async () => {
  const stats = await refreshStats(previous, {
    now,
    logger,
    fetchImpl: async (url) =>
      response(
        url.includes("fair-seldonian") ? "fair-seldonian" : "fairlearn",
        0,
      ),
  });
  assert.equal(stats.fairlearn.lastMonth, 0);
  assert.equal(stats["fair-seldonian"].lastMonth, 0);
  assert.equal(stats.fairlearn.asOf, "2026-11-25");
  assert.equal(previous.fairlearn.lastMonth, 100);
});

test("keeps a failed package's count and date while updating a successful package", async () => {
  const stats = await refreshStats(previous, {
    now,
    logger,
    fetchImpl: async (url) => {
      if (url.includes("fair-seldonian"))
        throw new Error("Network unavailable");
      return response("fairlearn", 200);
    },
  });
  assert.equal(stats.fairlearn.lastMonth, 200);
  assert.equal(stats.fairlearn.asOf, "2026-11-25");
  assert.deepEqual(stats["fair-seldonian"], previous["fair-seldonian"]);
});

test("keeps the last valid snapshot when responses are malformed or rate limited", async () => {
  const stats = await refreshStats(previous, {
    now,
    logger,
    fetchImpl: async (url) =>
      url.includes("fair-seldonian")
        ? { ok: false, status: 429 }
        : response("wrong-package", -1),
  });
  assert.deepEqual(stats, previous);
});
