var _ = require('lodash');
var karmaCoverage = require('karma-coverage');
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
        coverageReporter: {
            check: {
                global: {
                    lines: 85,
                },
            },
            reporters: [
                { type: 'html' },
                { type: 'text' },
            ],
        },
        files: [
            './node_modules/jasmine-ajax/lib/mock-ajax.js',
            './test/index.js',
        ],
        frameworks: [
            'jasmine',
        ],
        plugins: [
            karmaCoverage,
            karmaJasmine,
            karmaMochaReporter,
            karmaPhantomJsLauncher,
            karmaSourcemapLoader,
            karmaWebpack,
        ],
        preprocessors: {
            './src/index.js': ['coverage'],
            './test/index.js': ['webpack', 'sourcemap'],
        },
        reporters: [
            'mocha',
            'coverage',
        ],
        webpack: {
            devtool: 'inline-source-map',
            module: getWebpackModule(),
        },
        webpackMiddleware: {
            noInfo: true,
        },
    });
}

function getWebpackModule() {
    var module = _.cloneDeep(webpackConfig.module);
    var babelLoader = _.find(module.loaders, { loader: 'babel' });

    if (babelLoader) {
        babelLoader.query = babelLoader.query || {};
        babelLoader.query.plugins = babelLoader.query.plugins || [];
        babelLoader.query.plugins.push('istanbul');
    }

    return module;
}

module.exports = configureKarma;
