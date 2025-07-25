const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        port : 3030,
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.jsx?$/,
                exclude: /'node_modules'/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            config$: path.resolve(__dirname, "configs/app-config.js"),
            react: path.resolve(__dirname, "vendor/react-master"),
        },
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
            'bower_components',
            'shared',
            '/shared/vendor/modules',
        ],
    },
}