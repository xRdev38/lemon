const illustrations = require("../index");

describe("Package @lemon/illustrations", () => {
    test("should export a non-empty object", () => {
        expect(typeof illustrations).toBe("object");
        expect(Object.keys(illustrations).length).toBeGreaterThan(0);
    });

    test("should include some basic illustrations", () => {
        expect(illustrations).toHaveProperty("abstract");
        expect(illustrations).toHaveProperty("acceptTasks");
    });
});