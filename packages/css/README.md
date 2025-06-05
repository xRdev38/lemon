# @lemon/css

Comprehensive SCSS-based design system for Lemon (inspired by Atlassian Design System).

This package includes:

- **Tokens**: Colors, typography, spacing, shadows, border-radius, opacity, breakpoints, z-index, elevation.
- **Foundations**: Reset, mixins, functions.
- **Utilities**: Helper classes, grid system, visibility helpers.
- **Components**: Avatar, Badge, Button, Card, Checkbox, Dropdown, Input, Modal, Tabs, Toast, Tooltip.

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

To customize or extend variables/mixins/components:

```scss
@use "@lemon/css/src/scss/index" as *;
```

This imports all tokens, foundations, utilities, and components from the SCSS source.

## Available Scripts

From within the `packages/css` directory, you can run:

- **`npm run build`**  
  Compiles the SCSS source into a single CSS file at `dist/lemon.css`.
  ```bash
  npm run build
  # or, at the monorepo root:
  pnpm run build --scope=@lemon/css
  ```

- **`npm run lint`**  
  Runs Stylelint on all SCSS files under `src/scss/`. Automatically fixes many warnings.
  ```bash
  npm run lint
  # or, at the monorepo root:
  pnpm run lint --scope=@lemon/css
  ```

- **`npm run test`**  
  Runs Jest tests to ensure SCSS compiles without errors and Stylelint passes.
  ```bash
  npm run test
  # or, at the monorepo root:
  pnpm run test --scope=@lemon/css
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
│     │  ├─ _border-radius.scss
│     │  ├─ _opacity.scss
│     │  ├─ _breakpoints.scss
│     │  ├─ _z-index.scss
│     │  └─ _elevation.scss
│     ├─ foundations/
│     │  ├─ _reset.scss
│     │  ├─ _mixins.scss
│     │  └─ _functions.scss
│     ├─ utilities/
│     │  ├─ _helpers.scss
│     │  ├─ _grid.scss
│     │  └─ _visibility.scss
│     ├─ components/
│     │  ├─ _avatar.scss
│     │  ├─ _badge.scss
│     │  ├─ _button.scss
│     │  ├─ _card.scss
│     │  ├─ _checkbox.scss
│     │  ├─ _dropdown.scss
│     │  ├─ _input.scss
│     │  ├─ _modal.scss
│     │  ├─ _tabs.scss
│     │  ├─ _toast.scss
│     │  └─ _tooltip.scss
│     └─ index.scss
├─ __tests__/
│  └─ style.test.js
└─ dist/
   └─ lemon.css
```

- **`src/scss/tokens/`**: Token definitions (colors, typography, spacing, etc.).
- **`src/scss/foundations/`**: Reset, mixins, and helper functions.
- **`src/scss/utilities/`**: Utility classes (helpers, grid, visibility).
- **`src/scss/components/`**: Modular component styles.
- **`dist/lemon.css`**: Compiled CSS output.

## Contributing

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Install dependencies and build CSS:
   ```bash
   pnpm install
   pnpm run build
   ```
4. Make your changes, then lint and test:
   ```bash
   pnpm run lint
   pnpm run test
   ```
5. Commit your changes and open a pull request.

## License

MIT License
