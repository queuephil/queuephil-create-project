#!/usr/bin/env node
const { execSync } = require("child_process");

// define packages ------------------------------------------------------------
const packages = [
  // webpack-packages
  "webpack",
  "webpack-cli",
  "webpack-dev-server",
  "webpack-merge",
  "html-webpack-plugin",
  "html-loader",
  "style-loader",
  "css-loader",
  // eslint / prettier-packages
  "prettier",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-prettier",
  //"eslint-plugin-node"
  //"eslint-config-node"
];

// install packages -----------------------------------------------------------
const installPackages = () => {
  console.log("Installing packages...");
  try {
    execSync(`npm install -D ${packages.join(" ")}`, {
      stdio: "inherit",
    });
    console.log("Success!");
  } catch (error) {
    console.error("Failure:", error.message);
    process.exit(1);
  }
};

installPackages();

// define commands ------------------------------------------------------------
const commands = [
  "npx install-peerdeps --dev eslint-config-airbnb",
  "npx eslint --init",
];

// run commands ---------------------------------------------------------------
const runCommands = () => {
  console.log("Run commands...");

  try {
    commands.forEach((cmd) => {
      execSync(cmd, { stdio: "inherit" });
    });
    console.log("Success!");
  } catch (error) {
    console.error("Failure:", error.message);
    process.exit(1);
  }
};

runCommands();
