const distDir = __dirname + '/dist/textpattern';

var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        'jquery-ui.css': './scss/jquery-ui.scss'
    },
    output: {
        path: distDir,
        filename: '.Trashes'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: false, importLoaders: 2 } },
                        { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
                        { loader: 'sass-loader', options: { outputStyle: 'expanded', precision: 7 } }
                    ]
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(distDir),
        new StyleLintPlugin({
            configFile: '.stylelintrc.yml',
            syntax: 'scss',
            context: 'scss',
            files: '**/*.scss',
            failOnError: false,
            quiet: false
        }),
        new ExtractTextPlugin('jquery-ui.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessorOptions: {
                safe: true,
                discardComments: {
                    removeAll: true
                }
            }
        }),
    ]
};
