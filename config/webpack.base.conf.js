const webpack = require('webpack');

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
            }],
        }, {
            test: /\.vue$/,
            use: ['vue-loader'],
        }],
    },
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.webpack.js', '.js', '.vue', '.ts'],
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
};
