const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", "./src/index.jsx"],
    devtool: "eval-source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-Loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.html$/,
                use: 'html-Loader'
            },
            {
                test: /\.css$/i,
                use: ["style-Loader", "css-Loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-Loader",
                    "css-Loader",
                    {
                        loader: "sass-Loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ]
            },
            {
                test: /\.(png|jpn|gif)$/i,
                use: [
                    {
                        loader: 'file-Loader',
                        options: {
                            name: '[name].svg',
                            outputPath: './',
                            publicPath: './'
                        }
                    }]
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-Loader',
                    options: {}
                }
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin()
    ]

}