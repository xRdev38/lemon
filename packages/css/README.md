# @lemon/css

SCSS-based design system for Lemon (inspired by Atlassian).

## Installation

You can install this package via npm, Yarn, or pnpm:

```bash
pnpm add @lemon/css
```

## Usage

### 1. Use the compiled CSS

In your main CSS/SCSS entry file or HTML:

```scss
@import "@lemon/css/dist/lemon.css";
```

_or in HTML:_

```html
<link rel="stylesheet" href="node_modules/@lemon/css/dist/lemon.css" />
```

### 2. Use the SCSS sources directly

If you want to customize or extend variables/mixins:

```scss
@use "@lemon/css/src/scss/index" as *;
```

This will import all tokens, foundations, utilities, and components into your build pipeline.

## Available Scripts

From within the `packages/css` directory, you can run:

- **`npm run build`**  
  Compiles `src/scss/index.scss` into a single CSS file at `dist/lemon.css`.
  ```bash
  npm run build
  # or, at the monorepo root:
  pnpm run build --filter=@lemon/css
  ```

- **`npm run lint`**  
  Runs Stylelint on all SCSS files under `src/scss/`.  
  Automatically fixes many warnings where possible.
  ```bash
  npm run lint
  # or, at the monorepo root:
  pnpm run lint --filter=@lemon/css
  ```

- **`npm run test`**  
  Runs Jest tests to ensure that SCSS compiles without errors and Stylelint passes.
  ```bash
  npm run test
  # or, at the monorepo root:
  pnpm run test --filter=@lemon/css
  ```

## File Structure

```
packages/css/
├─ package.json
├─ README.md
├─ stylelint.config.js
├─ src/
│  └─ scss/
│     ├─ tokens/
│     │  ├─ _colors.scss
│     │  ├─ _typography.scss
│     │  ├─ _spacing.scss
│     │  ├─ _shadows.scss
│     │  └─ _breakpoints.scss
│     ├─ foundations/
│     │  ├─ _reset.scss
│     │  ├─ _mixins.scss
│     │  └─ _functions.scss
│     ├─ utilities/
│     │  ├─ _visibility.scss
│     │  ├─ _helpers.scss
│     │  └─ _grid.scss
│     ├─ components/
│     │  ├─ _button.scss
│     │  ├─ _card.scss
│     │  └─ _input.scss
│     └─ index.scss
├─ __tests__/
│  └─ style.test.js
└─ dist/
   └─ lemon.css
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Install dependencies and build CSS:
   ```bash
   pnpm install
   pnpm run build
   ```
4. Make your changes, then test and lint:
   ```bash
   pnpm run lint
   pnpm run test
   ```
5. Commit your changes and open a pull request.

## License

MIT License
