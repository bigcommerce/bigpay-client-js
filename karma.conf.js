var karmaJasmine = require('karma-jasmine');
var karmaMochaReporter = require('karma-mocha-reporter');
var karmaPhantomJsLauncher = require('karma-phantomjs-launcher');
var karmaSourcemapLoader = require('karma-sourcemap-loader');
var karmaWebpack = require('karma-webpack');

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
            module: {
                loaders: getLoaders(),
            },
        },
        webpackMiddleware: {
            noInfo: true,
        },
    });
}

function getLoaders() {
    return [
        {
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
            },
            test: /\.js$/,
        },
    ];
}

module.exports = configureKarma;
