const path = require("path");
const HWP = require("html-webpack-plugin");
const Extract = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: Extract.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader','sass-loader'],
                    publicPath: '/public'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,  //if you also use bower
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HWP({
            title: 'Metsahaldur',
            minify: {
                collapseWhitespace: false //swap this to true for prod build
            },
            hash: false, //Setting this true will force the browser to download the latest built JS bundle, to alleviate caching issues
            template: 'src/index.html'
        }),
        new Extract({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};