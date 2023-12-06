const path = require("path");

module.exports = {
    mode: "production",
    entry: "./out/index.js",
    output: {
        path: path.resolve(__dirname, "browser"),
        filename: "bundle.js",
        library: {
            name: "window",
            type: "assign-properties"
        }
    },
    externals: {
        phaser: "Phaser"
    },
    optimization: {
        minimize: false
    }
};