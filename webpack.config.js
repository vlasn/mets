var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry:  {
        app: [
            path.resolve(__dirname, 'src/app.js'),
            path.resolve(__dirname, 'src/components/Login.js')
        ],
        vendor: [
            'react', 'react-dom', 'react-router-dom', 'react-redux', 'redux', 'redux-thunk', 'material-ui'
        ]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: '[name].js',
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader','sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015","react", "stage-0"],
                    plugins: ["babel-plugin-transform-decorators-legacy"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                include: /flexboxgrid/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Metsahaldur',
            // minify: {
            //     collapseWhitespace: true // --this is for minifying HTML
            // },
            hash: true, //force remove caching issues.
            template: './src/index.html',
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor","manifest"],
            minChunks: Infinity,
        })
    ]
}
