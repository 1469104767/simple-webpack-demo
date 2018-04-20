const webpackMerge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const htmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = webpackMerge(baseConfig, {
    mode: "development",
    output: {
        filename: "[name].[hash].js"
    },
    devServer: {
        host: "0.0.0.0",
        port: 8000,
    },
    plugins: [
        new htmlWebpackPlugin({
            template:path.join(__dirname,"../public/template.html")
        })
    ]
});

module.exports = devConfig;