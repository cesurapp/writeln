const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        app: './app.js',
        bootstrap: './bootstrap.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", to: 'bootstrap.min.js' },
                { from: "node_modules/jquery/dist/jquery.min.js", to: '' },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
};