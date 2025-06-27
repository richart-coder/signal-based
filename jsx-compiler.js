import { parseSync } from "@swc/core";

import fs from "fs";
import chokidar from "chokidar";

function compileJSX(jsxContent) {
  const jsxAST = parseSync(jsxContent, {
    syntax: "ecmascript",
    jsx: true,
  });

  const compiledData = `
export const jsxAST = ${JSON.stringify(jsxAST, null, 2)};
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
