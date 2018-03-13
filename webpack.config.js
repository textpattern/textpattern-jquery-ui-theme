const distDir = __dirname + '/dist/textpattern';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

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
                    use: ExtractTextPlugin.extract({
                        // Inject CSS to page.
                        fallback: 'style-loader',
                        use: [
                            // Translates CSS into CommonJS modules.
                            { loader: 'css-loader', options: { minimize: false, importLoaders: 2 } },
                            // Run postCSS actions.
                            { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
                            // Compiles Sass to CSS.
                            { loader: 'sass-loader', options: { precision: 7 } }
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
            new ExtractTextPlugin('jquery-ui.min.css'),
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
                    use: ExtractTextPlugin.extract({
                        // Inject CSS to page.
                        fallback: 'style-loader',
                        use: [
                            // Translates CSS into CommonJS modules.
                            { loader: 'css-loader', options: { minimize: false, importLoaders: 2 } },
                            // Run postCSS actions.
                            { loader: 'postcss-loader', options: { plugins: [require('autoprefixer')] } },
                            // Compiles Sass to CSS.
                            { loader: 'sass-loader', options: { outputStyle: 'expanded', precision: 7 } }

                        ]
                    })
                },
            ]
        },
        plugins: [
            new ExtractTextPlugin('jquery-ui.css'),
        ]
    }
];
