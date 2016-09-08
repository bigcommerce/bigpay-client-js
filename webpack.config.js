var webpack = require('webpack');

function getWebpackConfig() {
    return {
        context: __dirname,
        devtool: 'source-map',
        entry: {
            'bigpay-client': './src/index.js',
            'bigpay-client.min': './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: './dist',
            library: 'BigpayClient',
            libraryTarget: 'umd',
        },
        module: {
            loaders: getLoaders(),
            preLoaders: getPreLoaders(),
        },
        plugins: getPlugins(),
    };
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

function getPlugins() {
    return [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            test: /\.min\.js$/,
        }),
    ];
}

function getPreLoaders() {
    return [
        {
            exclude: /node_modules/,
            loader: 'eslint',
            test: /\.js$/,
        },
    ];
}

module.exports = getWebpackConfig();
