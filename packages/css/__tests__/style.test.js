const { execSync } = require("child_process");
const path = require("path");

describe("Package @xrdev_38/css", () => {
    test("should compile SCSS without errors", () => {
        const cwd = path.resolve(__dirname, "..");
        expect(() => {
            execSync("npm run build", { cwd, stdio: "ignore" });
        }).not.toThrow();
    });

    test("should pass Stylelint", () => {
        const cwd = path.resolve(__dirname, "..");
        expect(() => {
            execSync("pnpm run lint", { cwd, stdio: "ignore" });
        }).not.toThrow();
    });
});
