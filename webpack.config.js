const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = require('path').resolve;
const build = resolve(__dirname, 'build');

module.exports = {
    entry: path.join(__dirname, '/src/index.ts'),
    output: {
        filename: 'index.js',
        path: build
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                to: 'index.html'
            }
        ])
    ]
};