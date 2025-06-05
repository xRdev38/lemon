# Lemon Monorepo

This repository is a monorepo managed by Lerna and pnpm workspaces. It contains three packages that make up the Lemon design system:

- **@lemon/css**: SCSS-based design system (tokens, utilities, components).
- **@lemon/icons**: SVG icon collection.
- **@lemon/illustrations**: Illustration assets in SVG/PNG/JPG.

## Installation (Root)

Install all dependencies and bootstrap workspaces:

```bash
pnpm install
```

## Available Commands (from root)

- **`npm run build`**  
  Builds all packages:
  ```bash
  pnpm run build
  ```

- **`npm run lint`**  
  Lints all relevant files (only @lemon/css uses Stylelint):
  ```bash
  pnpm run lint
  ```

- **`npm run test`**  
  Runs tests in all packages:
  ```bash
  pnpm run test
  ```

## Package References

- **CSS Package**: [packages/css/README.md](css-README.md)
- **Icons Package**: [packages/icons/README.md](icons-README.md)
- **Illustrations Package**: [packages/illustrations/README.md](illustrations-README.md)  
