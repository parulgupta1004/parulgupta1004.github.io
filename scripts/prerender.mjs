import { readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";
import {
  createLlmsText,
  createSitemap,
  getContentModifiedAt,
} from "./crawler-artifacts.mjs";

// Reuse the application and Vite's transforms; no separate Babel pipeline.
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const markup = renderToString(createElement(App));
  const file = new URL("../build/index.html", import.meta.url);
  const template = await readFile(file, "utf8");
  const root = '<div id="root"></div>';
  if (!template.includes(root)) {
    throw new Error("Expected an empty React root in the production HTML");
  }
  await writeFile(
    file,
    template.replace(root, `<div id="root">${markup}</div>`),
  );
  const [
    { site },
    { projects },
    { videos },
    { default: engagements },
    { socialMediaLinks },
  ] = await Promise.all([
    server.ssrLoadModule("/src/data/site.js"),
    server.ssrLoadModule("/src/data/projects.js"),
    server.ssrLoadModule("/src/data/media.js"),
    server.ssrLoadModule("/src/data/engagements.json"),
    server.ssrLoadModule("/src/portfolio.js"),
  ]);
  await writeFile(
    new URL("../build/sitemap.xml", import.meta.url),
    createSitemap(site.url, getContentModifiedAt()),
  );
  await writeFile(
    new URL("../build/llms.txt", import.meta.url),
    createLlmsText({ site, projects, videos, engagements, socialMediaLinks }),
  );
  console.log(
    "Rendered the portfolio and generated sitemap.xml and llms.txt from its source data.",
  );
} finally {
  await server.close();
}
