import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const [, , version, repo = ""] = process.argv;

if (!version) {
  console.error("Usage: node .github/scripts/set-build-version.mjs <version> [repo]");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..", "..");

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(rootDir, relativePath), "utf8"));
}

function writeJson(relativePath, data) {
  fs.writeFileSync(path.join(rootDir, relativePath), `${JSON.stringify(data, null, 2)}\n`);
}

function updateJson(relativePath, update) {
  const data = readJson(relativePath);
  update(data);
  writeJson(relativePath, data);
}

updateJson("AutoSubs-App/package.json", (data) => {
  data.version = version;
});

updateJson("AutoSubs-App/package-lock.json", (data) => {
  data.version = version;
  if (data.packages && data.packages[""]) {
    data.packages[""].version = version;
  }
});

updateJson("AutoSubs-App/src-tauri/tauri.conf.json", (data) => {
  data.version = version;

  if (repo) {
    const endpoint = `https://github.com/${repo}/releases/latest/download/latest.json`;
    data.plugins ??= {};
    data.plugins.updater ??= {};
    data.plugins.updater.endpoints = [endpoint];
  }
});

const cargoTomlPath = path.join(rootDir, "AutoSubs-App/src-tauri/Cargo.toml");
const cargoToml = fs.readFileSync(cargoTomlPath, "utf8");
const updatedCargoToml = cargoToml.replace(
  /(\[package\][\s\S]*?\nversion = )"[^"]+"/,
  `$1"${version}"`,
);

if (updatedCargoToml === cargoToml) {
  console.error("Failed to update Cargo.toml package version");
  process.exit(1);
}

fs.writeFileSync(cargoTomlPath, updatedCargoToml);
console.log(`Stamped build version ${version}${repo ? ` for ${repo}` : ""}`);
