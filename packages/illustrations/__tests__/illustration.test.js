const illustrations = require("../index");

describe("Package @xrdev_38/illustrations", () => {
    test("should export a non-empty object", () => {
        expect(typeof illustrations).toBe("object");
        expect(Object.keys(illustrations).length).toBeGreaterThan(0);
    });

    test("should include some basic illustrations", () => {
        expect(illustrations).toHaveProperty("abstract");
        expect(illustrations).toHaveProperty("acceptTasks");
    });
});