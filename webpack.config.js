const distDir = __dirname + '/dist/textpattern';

var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: false, importLoaders: 1 } },
                        { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } }
                    ]
                })
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
        new ExtractTextPlugin('[name]', {
            allChunks: true
        }),
    ]
};
