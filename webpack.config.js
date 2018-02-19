/// <binding BeforeBuild='Run - Production' />
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { app: './src/index.ts' },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hacker App',
            template: './index.ejs'
        })

    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
            , {
                test: /\.html$/,
                use: 'html-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2)$/, use: [
                    'url-loader?prefix=font/&limit=5000'
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=application/octet-stream']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve('src')
        }
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};