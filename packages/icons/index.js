const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "src", "icons");
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".svg"));
const icons = {};

files.forEach((file) => {
    const name = file.replace(".svg", "");
    const exportName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    icons[exportName] = fs.readFileSync(path.join(iconsDir, file), "utf8");
});

module.exports = icons;