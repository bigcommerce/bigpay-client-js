var karmaJasmine = require('karma-jasmine');
var karmaMochaReporter = require('karma-mocha-reporter');
var karmaPhantomJsLauncher = require('karma-phantomjs-launcher');
var karmaSourcemapLoader = require('karma-sourcemap-loader');
var karmaWebpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

function configureKarma(config) {
    config.set({
        basePath: __dirname,
        browsers: [
            'PhantomJS',
        ],
        files: [
            './node_modules/es6-promise/dist/es6-promise.js',
            './test/index.js',
        ],
        frameworks: [
            'jasmine',
        ],
        plugins: [
            karmaJasmine,
            karmaMochaReporter,
            karmaPhantomJsLauncher,
            karmaSourcemapLoader,
            karmaWebpack,
        ],
        preprocessors: {
            './test/index.js': ['webpack', 'sourcemap'],
        },
        reporters: [
            'mocha',
        ],
        webpack: {
            devtool: 'inline-source-map',
            module: webpackConfig.module,
        },
        webpackMiddleware: {
            noInfo: true,
        },
    });
}

module.exports = configureKarma;
