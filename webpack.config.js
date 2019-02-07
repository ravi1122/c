const path = require("path");
const webpack = require("webpack");
const CopyWebPack = require("copy-webpack-plugin");

module.exports = {

    entry: [
        path.join(process.cwd(), "src", "component", "index.js")
    ],
    output: {
        path: path.join(process.cwd(), "dist"),
        filename: "bundle.js"
    },

    plugins: [
        new CopyWebPack([{ from: process.cwd() + '/src/index.html', to: process.cwd() + '/dist' }])
    ],

    devServer: {
        inline: true,
        contentBase: './dist'
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            }
           
        ]
    }

}