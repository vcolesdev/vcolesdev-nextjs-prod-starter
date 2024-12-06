# [Docs WIP] Next.js Setup for Production

---

## Table of Contents

- Install Next.js
- Code Quality
  - Type Checking
  - Code Formatting
  - Code Linting
  - Conventional Commits
- Testing
  - Application Testing
  - End-to-End Testing

## Install Next.js

---

Run the installation script which will walk you through the setup process to initialize a new Next.js project.

```bash
# Run setup script
npx create-next-app@latest

# Change to project directory
cd <project-name>

# Start the development server to verify the installation
npm run dev

# Open the development server
open http://localhost:3000
```

### ESM Support

Convert the project into an ESM project by adding `"type": "module"` to the `package.json` file.

```json
{
  "type": "module"
}
```

## Code Quality

---

1. Type Checking
2. Code Formatting
3. Code Linting
4. Conventional Commits

### Type Checking

#### Run TypeScript Checks with Built-in Scripts

Add an explicit command to run TypeScript checks.

```json
{
  "type-check": "tsc -b"
}
```

### Code Formatting

#### Prettier for Code Formatting

Install Prettier and add a script to format the code. We're also installing a plugin to format Tailwind CSS classes.

```bash
# Install Prettier and Tailwind CSS plugin
npm i -D prettier prettier-plugin-tailwindcss

# Add the format script to our package.json file.
# I like to be creative with what I call mine.
{
  "makeover": "prettier --write ."
}

# Create a prettier.config.ts file to configure Prettier
# Visit https://prettier.io/docs/en/configuration for documentation and a list of available options.
# Example config:
{
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true
}
```

### Code Linting

#### Ensuring Code Quality with ESLint

ESLint can enforce code style and quality by scanning the codebase for potential issues.

- Import: Linting for import/export syntax.
- Playwright: Linting for Playwright.
- Prettier: Linting for Prettier.
- Simple Import Sort: Linting for import sorting.
- Unicorn: Linting for various best practices.

```bash
# Formatted for readability.
npm i -D @typescript-eslint/parser \
         eslint-plugin-import \
         eslint-config-prettier \
         eslint-plugin-playwright \
         eslint-plugin-prettier \
         eslint-plugin-simple-import-sort \
         eslint-plugin-unicorn

# Single line for copy-pasting.
# npm install --save-dev @typescript-eslint/parser eslint-plugin-unicorn eslint-plugin-import eslint-plugin-playwright eslint-config-prettier eslint-plugin-prettier eslint-plugin-simple-import-sort
```

Check the ESLint `eslint.config.js` file for the project configuration, and don't forget to add the `lint` script to `package.json`.

```json
{
  "lint": "eslint ."
}
```

### Conventional Commits

#### Prepare Commit Messages and Create Git Hooks

- Commitlint: Lint your commit messages.
- Commitizen: Write commit messages in a consistent format.
- Husky: Run scripts before committing.

```bash
# Install Commitlint, Conventional Config, and Husky
npm i -D @commitlint/cli@latest @commitlint/config-conventional@latest husky@latest

# Install Commitizen and Conventional Changelog
npm i -D commitizen cz-conventional-changelog
```

## Database

---

### Local Database

#### PostgresSQL, Flexible Database Solution

Navigate to the [PostgresSQL](https://www.postgresql.org/download/) website and download the installer for your operating system.

### Database ORM

#### Prisma, A Modern Toolkit for Interacting with Databases

## Testing

---

### Application Testing

#### App Testing with Vitest, a Popular Alternative to Jest

```bash
# Install the testing library
npm i -D vitest
```

### End-to-End Testing

#### Playwright for End-to-End Testing 

```bash
# Initialize Playwright
npx playwright init
```