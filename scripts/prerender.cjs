const fs = require("node:fs");
const path = require("node:path");
const babel = require("@babel/core");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const sourceDirectory = path.join(__dirname, "../src") + path.sep;
const originalLoader = require.extensions[".js"];
require.extensions[".js"] = (module, filename) => {
  if (!filename.startsWith(sourceDirectory)) return originalLoader(module, filename);
  const result = babel.transformSync(fs.readFileSync(filename, "utf8"), {
    filename,
    babelrc: false,
    configFile: false,
    presets: [[require.resolve("@babel/preset-env"), { targets: { node: "current" }, modules: "commonjs" }], [require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
  });
  module._compile(result.code, filename);
};
require.extensions[".css"] = () => {};

const App = require("../src/App").default;
const markup = ReactDOMServer.renderToString(React.createElement(App));
const file = path.join(__dirname, "../build/index.html");
const template = fs.readFileSync(file, "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("Expected an empty React root in the production HTML");
fs.writeFileSync(file, template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
console.log("Rendered the full portfolio into build/index.html for search engines and visitors without JavaScript.");
