'use strict';

const env = require('./webpack.environment.js');
const autoprefixer = require('autoprefixer');
const cssMqpacker = require('css-mqpacker');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        test: /\.js$/,
        exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
        use: [{
            loader: 'babel-loader',
            options: {
                presets: [ 'es2015','es2016']
            },
        }],
    },
    {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{
            loader: 'vue-loader',
            
        }],
    },
    {
        test: /\.css$/,
        use: [
            {
                loader: 'style'
            },
            {
                loader: 'css'
            },
        ],
    },
    {
        test: /\.less/,
        loader : ExtractTextPlugin.extract({
            fallback: 'style',
            use: [
                {
                    loader: 'css',
                },
                {
                    loader: 'postcss',
                    options: {
                        plugins: () => [
                            autoprefixer({
                                browsers: ['last 3 versions']
                            }),
                            cssMqpacker({
                                sort: true
                            })
                        ]
                    }
                },
                {
                    loader: 'less',
                    options: {
                        compress: env.isProduction
                    }
                }
            ]
        })
    },
    {
        test: /\.(ttf|eot|woff)$/,
        include:/node_modules/,
        use: [
            {
                loader: 'file',
                options: {
                    name: 'external[1].[ext]',
                    regExp: 'node_modules(.*)'
                }
            }
        ]
    },
    {
        test: /\.(ttf|eot|woff)$/,
        exclude:/node_modules/,
        use: [
            {
                loader: 'file',
                options: {
                    name: 'fonts/[name].[ext]'
                }
            }
        ]
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include:/node_modules/,
        use: [
            {
                loader: 'file',
                options: {
                    name: 'external[1].[ext]',
                    regExp: 'node_modules(.*)'
                }
            },
            {
                loader: 'img'
            }
        ]
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude:/node_modules/,
        use: [
            {
                loader: 'file',
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                loader: 'img'
            }
        ]
    },
];