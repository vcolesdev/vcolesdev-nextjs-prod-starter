#!/bin/sh

echo "Adding git hooks..."

npx husky add .husky/pre-commit 'npm run lint && npm run type-check'
npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && npx cz --hook || true'

echo "Git hooks added successfully!"

chmod a+x .husky/pre-commit
chmod a+x .husky/prepare-commit-msg

echo "Git hooks permissions updated successfully!"
