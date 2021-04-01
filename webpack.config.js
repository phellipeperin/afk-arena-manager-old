// Dependencies
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const path = require('path');

// Module Rules
const jsRule = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
    },
};
const cssRule = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};
const scssRule = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
};
const imageRule = {
    test: /\.(png|jpg|jpeg|svg|gif)?$/,
    use: 'file-loader',
};

// Dev Server
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
};

// Plugins
const ignorePlugin = new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/);
const htmlPlugin = new HtmlWebPackPlugin({
    title: 'AFK Hero Manager',
    template: './public/index.html',
    filename: './index.html',
    favicon: './public/favicon.png',
});
// const bundleAnalyzerPlugin = new webpackBundleAnalyzer.BundleAnalyzerPlugin();

// Export
module.exports = {
    devtool: 'eval',
    output: {
        filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : '[name].[hash].js',
    },
    module: {
        rules: [jsRule, cssRule, scssRule, imageRule],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: [path.join(__dirname, 'dist')],
        compress: true,
        headers,
    },
    plugins: [ignorePlugin, htmlPlugin],
};
