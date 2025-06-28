import { parseSync } from "@swc/core";
import fs from "fs";
import chokidar from "chokidar";
import transformPOToFC from "./utils/transformPOToFC.js";

function compileJSX(jsxContent) {
  const preprocessedContent = transformPOToFC(jsxContent);

  const jsxAST = parseSync(preprocessedContent, {
    syntax: "ecmascript",
    jsx: true,
  });

  const compiledData = `
export const jsxAST = ${JSON.stringify(jsxAST, null, 2)};
export const lastCompiled = ${Date.now()};
export const originalContent = ${JSON.stringify(jsxContent)};
export const preprocessedContent = ${JSON.stringify(preprocessedContent)};
`;

  fs.writeFileSync("./compiled-template.js", compiledData);
}

const watcher = chokidar.watch("./src/template.jsx", {
  persistent: true,
});

watcher.on("change", (filePath) => {
  console.log(`📝 檢測到 ${filePath} 變化，重新編譯...`);
  const jsxContent = fs.readFileSync(filePath, "utf8");
  compileJSX(jsxContent);
  console.log(`📝 編譯完成`);
});

watcher.on("error", (error) => {
  console.error(`❌ 檔案監聽錯誤:`, error.message);
});

console.log("🔍 開始監聽 JSX 文件變化...");

if (fs.existsSync("./src/template.jsx")) {
  const jsxContent = fs.readFileSync("./src/template.jsx", "utf8");
  compileJSX(jsxContent);
}
