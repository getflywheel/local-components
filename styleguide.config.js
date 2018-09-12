const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    skipComponentsWithoutExample: true,
    getComponentPathLine(componentPath) {
        return `import { ${path.basename(componentPath, '.jsx')} } from 'local-components';`
    },
    components: 'src/**/[A-Z]*.jsx',
    webpackConfig: () => {
        return {
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.(css|sass|scss)$/,
                        use: [
                            // 'css-hot-loader',
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    sourceMap: true,
                                    importLoaders: 1,
                                    localIdentName: '[local]_[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true,
                                }
                            },
                        ]
                    },
                ],
            },
            plugins: [
                new webpack.NormalModuleReplacementPlugin(/electron/, function (resource) {
                    resource.request = path.resolve(__dirname, 'styleguide', 'stubs', 'electron.stub.js');
                }),
                new MiniCssExtractPlugin({
                    filename: "./dist/boom.css"
                }),
            ]
        };
    }
};
