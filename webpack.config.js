'use strict';

const Webpack = require('webpack');

const entries = require('./config/webpack.entries.js');
const plugins = require('./config/webpack.plugins.js');
const loaders = require('./config/webpack.loaders.js');
const env = require('./config/webpack.environment.js');


const isProduction = env.isProduction;
const path = require('path');
module.exports = {

    context: path.join(__dirname, '/src/game-visual/entry'),
    entry: entries,
    output: {
        path:  path.join(__dirname, '/src/game-visual/'),
        filename: 'js/[name].js',
        library: '[name]',
        publicPath:  path.join(__dirname, '/build/')
    },
    plugins: plugins,
    watch: !isProduction,
    watchOptions: {
        aggregateTimeout: 100,
        ignored: /node_modules/
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js']
    },
    resolveLoader: {
        moduleExtensions:    ['-loader'],
        extensions:         ['.js']
    },
    module: {
        rules: loaders
    },
    stats: {
        modules: true,
        maxModules: 0,
        children: false,
        assets: false,
        timings: false,
        version: false,
        hash: false
    },
    devServer: {
        contentBase: __dirname + '/',
        hot: true
    },
};