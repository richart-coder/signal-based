import { parseSync } from "@swc/core";
import linearSplit from "./src/linearSplit.js";
import mergeStaticParts from "./src/mergeStaticParts.js";
import fs from "fs";
import chokidar from "chokidar";

function compileJSX(jsxContent) {
  const ast = parseSync(jsxContent, {
    syntax: "ecmascript",
    jsx: true,
  });

  const sequence = linearSplit(ast);
  const merged = mergeStaticParts(sequence);

  const compiledData = `
export const compiledTemplate = ${JSON.stringify(merged, null, 2)};
export const lastCompiled = ${Date.now()};
`;

  fs.writeFileSync("./compiled-template.js", compiledData);
  console.log(`✅ 模板已重新編譯 ${new Date().toLocaleTimeString()}`);
}

const watcher = chokidar.watch("./src/template.jsx", {
  persistent: true,
});

watcher.on("change", (filePath) => {
  console.log(`📝 檢測到 ${filePath} 變化，重新編譯...`);
  const jsxContent = fs.readFileSync(filePath, "utf8");
  compileJSX(jsxContent);
});

console.log("🔍 開始監聽 JSX 文件變化...");
