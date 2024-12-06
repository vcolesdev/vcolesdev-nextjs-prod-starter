import pluginJs from "@eslint/js";
import playwright from "eslint-plugin-playwright";
import eslintPluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * Files
 */
const files = ["tests/**", "**/*.{js,mjs,cjs,ts,jsx,tsx}"];

/**
 * Language options
 */
const languageOptions = {
  globals: globals.builtin,
};

/**
 * Plugins
 */
const plugins = {
  playwright,
  prettier: eslintPluginPrettier,
  "simple-import-sort": simpleImportSort,
  unicorn: eslintPluginUnicorn,
};

/**
 * Rules
 */
const rules = {
  // Simple import sort
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  // Unicorn
  "unicorn/no-array-callback-reference": "off",
  "unicorn/no-array-for-each": "off",
  "unicorn/no-array-reduce": "off",
  "unicorn/prevent-abbreviations": [
    "error",
    {
      allowList: {
        e2e: true,
      },
      replacements: {
        props: false,
        ref: false,
        params: false,
      },
    },
  ],
};

/**
 * Settings
 */
const settings = {
  react: {
    version: "detect",
    defaultVersion: "18.3.1",
  },
};

const ignores = [
  "!/.*.{js,jsx,ts,tsx}",
  "*.min.{js,jsx,ts,tsx}",
  ".*cache",
  ".github/**",
  ".next/**",
  ".vercel/**",
  ".vscode/**",
  "build/**",
  "dist/**",
  "node_modules/**",
  "playwright-report/**",
  "public/**",
  "tests-examples/**",
];

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    files: files,
  },
  {
    languageOptions: languageOptions,
  },
  {
    ignores: ignores,
  },
  {
    plugins: plugins,
  },
  {
    rules: rules,
  },
  {
    settings: settings,
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...tseslint.configs.recommended,
];

export default config;
