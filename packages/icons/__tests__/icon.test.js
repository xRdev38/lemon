const icons = require("../index");

describe("Package @xrdev_38/icons", () => {
    test("should be export empty object", () => {
        expect(typeof icons).toBe("object");
        expect(Object.keys(icons).length).toBeGreaterThan(0);
    });

    test("should be contain basic icons", () => {
        expect(icons).toHaveProperty("arrowLeft");
        expect(icons).toHaveProperty("arrows");
        expect(icons.arrowLeft).toMatch(/^<svg[^>]*>/);
    });
});