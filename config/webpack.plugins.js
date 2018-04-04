'use strict';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackOnBuildPlugin = require('on-build-webpack');
const Webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



const env = require('./webpack.environment.js');
const colors = require('colors');
const path = require('path');

const dirBuild = path.join(__dirname, '/../../htdocs/assets/build/');

const plugins = [
    new Webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(env.NODE_ENV),
        isProduction: env.isProduction,
        isDevelopment: env.isDevelopment,
    }),
    new Webpack.NoEmitOnErrorsPlugin(),
    new AssetsPlugin({path: dirBuild}),
    new CleanWebpackPlugin([dirBuild], {
        root: process.cwd()
    }),
    new WebpackOnBuildPlugin(function(stats) {
        const date = new Date();
        console.log(colors.cyan.bold(date.toLocaleTimeString()));
    }),

    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
];

if (env.isProduction) {
    plugins.push(
        new UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            },
            mangle: {
                except: ['$']
            }
        })
    );
}

module.exports = plugins;