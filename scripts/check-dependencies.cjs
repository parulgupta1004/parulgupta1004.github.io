const fs = require("node:fs");
const path = require("node:path");

const { packages } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../package-lock.json"), "utf8"),
);
const deprecated = Object.entries(packages)
  .filter(([, metadata]) => metadata.deprecated)
  .map(([name, metadata]) => `${name}: ${metadata.deprecated}`);

if (deprecated.length) {
  console.error(deprecated.join("\n"));
  process.exitCode = 1;
} else {
  console.log("No deprecated packages in the dependency lockfile.");
}
