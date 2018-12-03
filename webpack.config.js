const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'app.js')
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: process.env.NODE_ENV === 'production' ? '[name].[hash:6].js' : '[name].js'
    },
    resolve: {
        alias: {
            '@material-ui/core': '@material-ui/core/es',
            '@material-ui/icons': '@material-ui/icons/es'
        }
    },
    plugins: [
        new CleanWebpackPlugin([
            path.join(__dirname, 'public', '*.js'),
            path.join(__dirname, 'public', '*.html')
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new BundleAnalyzerPlugin(),
        new UglifyJsPlugin({
            test: /\.js($|\?)/i,
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            filename: process.env.NODE_ENV === 'production' ? path.join(__dirname, 'public', 'index.html') : path.join(__dirname, 'public', 'index.html'),
            template: path.join(__dirname, 'src', 'index.html'),
            inject: false
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                },
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        host: "localhost",
        proxy: {
            '/app.js': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/app.js': '/app.js'
                }
            },
            '/vendors.js': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/vendors.js': '/vendors.js'
                }
            },
            '/api/**': {
                target: 'http://localhost:4000',
                secure: false,
                changeOrigin: true
            }
        }
    }
};