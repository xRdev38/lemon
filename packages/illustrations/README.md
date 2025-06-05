# @xrdev_38/lemon-illustrations

Illustrations for the Lemon design system.

## Installation

```bash
pnpm add @xrdev_38/lemon-illustrations
```

## Usage

```js
import illustrations from "@xrdev_38/lemon-illustrations";

// Each key is a camelCased illustration name, and each value is either:
// • A string containing raw SVG markup (for `.svg` files), or
// • A Buffer (for binary formats such as `.png`, `.jpg`).
const svgEmptyState = illustrations.emptyState;
```

You can then inject the SVG string into your HTML or convert to a React/Vue component, or pass the Buffer to an `<img src={URL.createObjectURL(new Blob([buffer]))} />`.

## Available Scripts

From within the `packages/illustrations` directory, you can run:

- **`npm run build`**  
  Copies all illustration files (SVG, PNG, JPG, etc.) from `src/illustrations/` to `dist/illustrations/`.
  ```bash
  npm run build
  # or, at the monorepo root:
  pnpm run build --scope=@xrdev_38/lemon-illustrations
  ```

- **`npm run test`**  
  Runs Jest to verify that at least one illustration is exported under the expected key names.
  ```bash
  npm run test
  # or, at the monorepo root:
  pnpm run test --scope=@xrdev_38/lemon-illustrations
  ```

## File Structure

```
packages/illustrations/
├─ package.json
├─ README.md
├─ src/
│  └─ illustrations/
│     ├─ empty-state.svg
│     ├─ onboarding-hero.svg
│     ├─ error-illustration.png
│     └─ … (your illustration files)
├─ index.js
└─ __tests__/
   └─ illustration.test.js
```

- **`src/illustrations/`**: Directory containing raw `.svg`, `.png`, `.jpg`, etc.
- **`index.js`**: Reads each file in `src/illustrations/`, converts filenames to camelCase (e.g., `empty-state.svg` → `emptyState`), and exports an object where keys map to file contents (strings for SVGs, Buffers for binaries).
- **`dist/illustrations/`**: Output folder after running `npm run build`.
- **`__tests__/illustration.test.js`**: Jest tests to ensure the export object is non-empty and contains expected keys such as `emptyState` and `onboardingHero`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-illustration`).
3. Add your illustration file(s) to `src/illustrations/`.
4. Run build and tests:
   ```bash
   pnpm run build --scope=@xrdev_38/lemon-illustrations
   pnpm run test --scope=@xrdev_38/lemon-illustrations
   ```
5. Commit and open a pull request.

## License

MIT License
