const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // the output bundle won't be optimized for production but suitable for development
    mode: "development",
    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        // the output of the webpack build will be in /dist directory
        path: path.resolve(__dirname, "dist"),
        // the filename of the JS bundle will be bundle.js
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            // for any file with a suffix of js or jsx

            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },

    devServer: {
        historyApiFallback: true,
    },
    mode: "development",
    devtool: "source-map",
    // add a custom index.html as the template
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
    ],
};
