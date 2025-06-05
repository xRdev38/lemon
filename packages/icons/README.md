# @xrdev_38/lemon-icons

SVG icon collection for the Lemon design system.

## Installation

```bash
pnpm add @xrdev_38/lemon-icons
```

## Usage

```js
import icons from "@xrdev_38/lemon-icons";

// Each key is a camelCased icon name, and each value is the raw SVG string.
const svgArrowLeft = icons.arrowLeft;
console.log(svgArrowLeft); // "<svg xmlns=...>…</svg>"
```

You can then inject the SVG string into your HTML or convert to a React/Vue component as needed.

## Available Scripts

From within the `packages/icons` directory, you can run:

- **`npm run build`**  
  Copies all SVG files from `src/icons/` into `dist/icons/`.
  ```bash
  npm run build
  # or, at the monorepo root:
  pnpm run build --scope=@xrdev_38/lemon-icons
  ```

- **`npm run test`**  
  Runs Jest to verify that at least one icon is exported and that its content starts with `<svg`.
  ```bash
  npm run test
  # or, at the monorepo root:
  pnpm run test --scope=@xrdev_38/lemon-icons
  ```

## File Structure

```
packages/icons/
├─ package.json
├─ README.md
├─ src/
│  └─ icons/
│     ├─ arrow-left.svg
│     ├─ arrow-right.svg
│     ├─ check-circle.svg
│     ├─ close.svg
│     └─ … (your SVG files here)
├─ index.js
└─ __tests__/
   └─ icon.test.js
```

- **`src/icons/`**: Directory containing raw `.svg` files.
- **`index.js`**: Reads all SVGs in `src/icons/`, converts each filename to camelCase (e.g., `arrow-left.svg` → `arrowLeft`), and exports an object mapping names to SVG strings.
- **`dist/icons/`**: Output folder after running `npm run build`.
- **`__tests__/icon.test.js`**: Jest tests to ensure that the export object is non-empty and contains expected icon keys.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-icon`).
3. Add your SVG file(s) to `src/icons/`.
4. Run build and tests:
   ```bash
   pnpm run build --scope=@xrdev_38/lemon-icons
   pnpm run test --scope=@xrdev_38/lemon-icons
   ```
5. Commit and open a pull request.

## License

MIT License
