# Package Configuration Guide

This document explains how to configure your `package.json` to publish the MealVote component library to NPM.

## Required package.json Fields

Add or update these fields in your `package.json`:

```json
{
  "name": "@mealvote/components",
  "version": "0.1.0",
  "description": "React component library for collaborative meal planning and voting",
  "type": "module",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    },
    "./styles.css": "./dist/style.css"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:lib": "vite build --config vite.config.lib.ts && tsc --emitDeclarationOnly --outDir dist",
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "prepublishOnly": "npm run build:lib"
  },
  "keywords": [
    "react",
    "components",
    "meal-planning",
    "voting",
    "recipe",
    "ui",
    "typescript",
    "tailwindcss"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/mealvote-components"
  },
  "bugs": {
    "url": "https://github.com/yourusername/mealvote-components/issues"
  },
  "homepage": "https://github.com/yourusername/mealvote-components#readme",
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.462.0"
  },
  "devDependencies": {
    "@storybook/react": "^8.0.0",
    "@storybook/react-vite": "^8.0.0",
    "@storybook/addon-essentials": "^8.0.0",
    "@storybook/addon-interactions": "^8.0.0",
    "@storybook/addon-links": "^8.0.0",
    "@storybook/blocks": "^8.0.0",
    "storybook": "^8.0.0"
  }
}
```

## Publishing to NPM

### 1. Build the Library

```bash
npm run build:lib
```

This will create the `dist` folder with:
- `index.mjs` - ES modules build
- `index.cjs` - CommonJS build
- `index.d.ts` - TypeScript declarations
- `style.css` - Bundled styles

### 2. Test Locally

Before publishing, test the package locally:

```bash
# In your library directory
npm link

# In a test project
npm link @mealvote/components
```

### 3. Login to NPM

```bash
npm login
```

### 4. Publish

For first-time publish:

```bash
npm publish --access public
```

For updates:

```bash
# Update version in package.json first
npm version patch  # or minor, or major
npm publish
```

## Version Management

Follow semantic versioning:

- **Patch** (0.1.x) - Bug fixes
- **Minor** (0.x.0) - New features, backward compatible
- **Major** (x.0.0) - Breaking changes

```bash
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.1 -> 0.2.0
npm version major  # 0.2.0 -> 1.0.0
```

## Distribution Tags

For beta releases:

```bash
npm publish --tag beta
```

For latest stable:

```bash
npm publish --tag latest
```

## CI/CD Integration

Example GitHub Actions workflow:

```yaml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - run: npm ci
      - run: npm run build:lib
      - run: npm test
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Package Size Optimization

Check your bundle size:

```bash
npm run build:lib
du -sh dist/
```

Tips to reduce size:
- Ensure peer dependencies are marked correctly
- Use tree-shaking friendly imports
- Externalize large dependencies
- Compress images used in Storybook

## Documentation

After publishing, update:
1. README.md with installation instructions
2. CHANGELOG.md with version history
3. GitHub releases with release notes
4. Storybook deployment for live examples

## Testing the Published Package

```bash
# Install in a fresh project
npx create-vite@latest test-app --template react-ts
cd test-app
npm install @mealvote/components
```

Then test imports:

```tsx
import { RecipeCard } from '@mealvote/components';
import '@mealvote/components/styles.css';
```
