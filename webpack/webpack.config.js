const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry: './index.js',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "metro-bundle.js"
    },
}