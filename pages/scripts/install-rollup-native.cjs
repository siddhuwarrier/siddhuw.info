/**
 * Workaround for https://github.com/npm/cli/issues/4828
 * npm sometimes fails to install the platform-specific rollup binary.
 * This script detects the missing binary and installs it via npm pack.
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const pkg = `@rollup/rollup-${process.platform}-${process.arch}`;
const dest = path.join(__dirname, "..", "node_modules", "@rollup", `rollup-${process.platform}-${process.arch}`);

try {
  require.resolve(pkg);
  // Already installed, nothing to do
} catch {
  console.log(`${pkg} not found, installing manually...`);
  try {
    execSync(`npm pack ${pkg} --pack-destination=.`, { cwd: path.join(__dirname, ".."), stdio: "pipe" });
    const tarball = fs.readdirSync(path.join(__dirname, "..")).find((f) => f.startsWith("rollup-rollup-") && f.endsWith(".tgz"));
    if (tarball) {
      const tarballPath = path.join(__dirname, "..", tarball);
      fs.mkdirSync(dest, { recursive: true });
      execSync(`tar -xzf "${tarballPath}" --strip-components=1 -C "${dest}"`, { stdio: "pipe" });
      fs.unlinkSync(tarballPath);
      console.log(`${pkg} installed successfully.`);
    }
  } catch (e) {
    // Not available for this platform — that's fine (e.g. Linux CI)
    console.log(`${pkg} not available for this platform, skipping.`);
  }
}
