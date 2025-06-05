const fs = require("fs");
const path = require("path");

const illusDir = path.join(__dirname, "src", "illustrations");
const files = fs.readdirSync(illusDir);

const illustrations = {};

files.forEach((file) => {
    const name = file.replace(/\.(svg|png|jpg|jpeg)$/, "");
    const exportName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    illustrations[exportName] = fs.readFileSync(path.join(illusDir, file));
});

module.exports = illustrations;
