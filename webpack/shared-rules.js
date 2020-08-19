const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const packageJson = require('../package.json');

module.exports = {
    sass: (styleLoader) => ({
        test: /\.(css|sass|scss)$/,
        use: [
            styleLoader,
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: '[local]_[hash:base64:5]_v' + packageJson.version.replace(/\./g, '-'),
                }
            },
            {
                loader: 'resolve-url-loader',
            },
            {
                loader: 'sass-loader',
            },
        ]
    }),
    reactSvg: {
        test: /\.svg$/,
        issuer: {
            test: /\.[tj]sx?$/,
        },
        use: [
            'babel-loader',
            {
                loader: 'react-svg-loader',
                options: {
                    svgo: {
                        plugins: [
                            {
                                inlineStyles: {onlyMatchedOnce: false},
                            },
                        ],
                    },
                },
            },
        ],
    },
    /**
     * SVGs inside CSS still need to be loaded with the URL loader instead of being converted to
     * React components
     */
    cssSvg: {
        test: /\.(svg)$/i,
        issuer: {
            test: /\.(css|sass|scss)$/,
        },
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 16384,
                },
            },
        ],
    },
    images: {
        test: /\.(png|jpg|gif)$/i,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 16384
                }
            }
        ]
    }
};
