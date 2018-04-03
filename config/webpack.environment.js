'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevelopment = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'production';

module.exports = {
    NODE_ENV: NODE_ENV,
    isDevelopment: isDevelopment,
    isProduction: isProduction,
    WEB_PATH: process.env.WEB_PATH || false
};