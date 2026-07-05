const fs = require("fs");
const path = require("path");
const Babel = require("../public/vendor/babel.min.js");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

function copyFile(source, target) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyDir(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      copyFile(sourcePath, targetPath);
    }
  }
}

function compileApp() {
  const sourcePath = path.join(root, "src", "App.tsx");
  const targetPath = path.join(root, "src", "App.compiled.js");
  const source = fs.readFileSync(sourcePath, "utf8");
  const output = Babel.transform(source, {
    filename: "App.tsx",
    presets: ["typescript", ["react", { runtime: "classic" }]],
  }).code;
  fs.writeFileSync(targetPath, output);
}

fs.rmSync(dist, { recursive: true, force: true });
compileApp();
copyFile(path.join(root, "index.html"), path.join(dist, "index.html"));
copyFile(path.join(root, "service-worker.js"), path.join(dist, "service-worker.js"));
copyFile(path.join(root, "src", "App.compiled.js"), path.join(dist, "src", "App.compiled.js"));
copyFile(path.join(root, "src", "styles.css"), path.join(dist, "src", "styles.css"));
if (fs.existsSync(path.join(root, "src", "data"))) {
  copyDir(path.join(root, "src", "data"), path.join(dist, "src", "data"));
}
copyDir(path.join(root, "public"), path.join(dist, "public"));

console.log("Prompt Atelier exported to dist/");
