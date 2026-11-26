const fs = require("node:fs/promises");
const path = require("node:path");

async function refreshStats(
  previousStats,
  { fetchImpl = globalThis.fetch, now = new Date(), logger = console } = {},
) {
  const names = Object.keys(previousStats);
  if (names.length === 0) throw new Error("No PyPI packages configured");

  const results = await Promise.allSettled(
    names.map(async (name) => {
      const response = await fetchImpl(
        `https://pypistats.org/api/packages/${encodeURIComponent(name)}/recent`,
        {
          headers: { "User-Agent": "ParulGuptaPortfolio/1.0" },
          signal: AbortSignal.timeout(20000),
        },
      );
      if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);

      const result = await response.json();
      if (
        result.package !== name ||
        result.type !== "recent_downloads" ||
        !Number.isSafeInteger(result.data?.last_month) ||
        result.data.last_month < 0
      )
        throw new Error(`${name}: invalid download count`);

      return [
        name,
        {
          lastMonth: result.data.last_month,
          asOf: now.toISOString().slice(0, 10),
          source: `https://pypistats.org/packages/${name}`,
        },
      ];
    }),
  );

  const stats = { ...previousStats };
  for (const result of results) {
    if (result.status === "fulfilled") {
      const [name, value] = result.value;
      stats[name] = value;
      logger.log(
        `${name}: ${value.lastMonth.toLocaleString("en-US")} downloads in the last month`,
      );
    } else {
      const message = `Keeping the dated snapshot: ${result.reason.message}`;
      logger.warn(
        process.env.GITHUB_ACTIONS ? `::warning::${message}` : message,
      );
    }
  }
  return stats;
}

async function main() {
  const file = path.join(__dirname, "../src/data/pypi-stats.json");
  const previousStats = JSON.parse(await fs.readFile(file, "utf8"));
  const stats = await refreshStats(previousStats);
  const temporaryFile = `${file}.tmp`;
  await fs.writeFile(temporaryFile, JSON.stringify(stats, null, 2) + "\n");
  await fs.rename(temporaryFile, file);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

module.exports = { refreshStats };
