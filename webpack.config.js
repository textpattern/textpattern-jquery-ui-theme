const distDir = __dirname + '/dist/textpattern';

const CleanWebpackPlugin = require('clean-webpack-plugin');
const Fiber = require('fibers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = [
    {
        entry: {
            'jquery-ui.min.css': './scss/jquery-ui.scss'
        },
        output: {
            path: distDir,
            filename: '.Trashes'
        },
        module: {
            rules: [
                {
                    test: /\.(scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS modules.
                        { loader: 'css-loader', options: { importLoaders: 2 } },
                        // Run postCSS actions.
                        { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
                        // Compiles Sass to CSS.
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('dart-sass'),
                                fiber: Fiber,
                                outputStyle: 'expanded'
                            }
                        }
                    ]
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'jquery-ui.min.css'
            }),
            new StyleLintPlugin({
                configFile: '.stylelintrc.yml',
                syntax: 'scss',
                context: 'scss',
                files: '**/*.scss',
                failOnError: false,
                quiet: false
            }),
        ]
    }, {
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
                    test: /\.(scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS modules.
                        { loader: 'css-loader', options: { importLoaders: 2 } },
                        // Run postCSS actions.
                        { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
                        // Compiles Sass to CSS.
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('dart-sass'),
                                fiber: Fiber,
                                outputStyle: 'expanded'
                            }
                        }

                    ]
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'jquery-ui.css'
            }),
        ]
    }
];
