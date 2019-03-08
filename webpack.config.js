const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const path = require('path');

const port = 3000;
const buildDir = __dirname + '/dist';

module.exports = {
    entry: {bundle: './src/index.tsx'},
    output: {
        filename: '[name].js',
        path: path.join(buildDir, 'assets'),
        publicPath: '/assets/'
    },
    devServer: {
        compress: true,
        contentBase: [buildDir, './src/'],
        hot: true,
        historyApiFallback: true,
        open: true,
        port
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            alwaysWriteToDisk: true,
            template: './src/index-template.html',
            filename: '../index.html'
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
};
