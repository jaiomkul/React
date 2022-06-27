const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(".","build"), //folder
        filename: "bundle.js", // filename
    },
    mode: "production",
    module: {
        rules:[{test: /\.css$/, use: ["style-loader", "css-loader"]}],
        rules: [ { test: /\.(png|jpe?g|gif)$/i, use: [ { loader: 'file-loader', }, ], }, ],
    },
};