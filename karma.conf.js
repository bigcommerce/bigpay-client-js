var karmaCoverage = require('karma-coverage');
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
        coverageReporter: {
            check: {
                global: {
                    branches: 95,
                    functions: 95,
                    lines: 95,
                    statements: 95,
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
            module: {
                loaders: [
                    {
                        exclude: /node_modules/,
                        include: __dirname,
                        loader: 'babel',
                        query: {
                            presets: ['es2015'],
                            plugins: ['istanbul'],
                        },
                        test: /\.js$/,
                    },
                ],
                preLoaders: [
                    {
                        exclude: /node_modules/,
                        include: __dirname,
                        loader: 'eslint',
                        test: /\.js$/,
                    },
                ],
            },
        },
        webpackMiddleware: {
            noInfo: true,
        },
    });
}

module.exports = configureKarma;
