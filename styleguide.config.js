const webpack = require('webpack');
const path = require('path');

module.exports = {
    skipComponentsWithoutExample: true,
    getComponentPathLine(componentPath) {
        return `import { ${path.basename(componentPath, '.jsx')} } from 'local-components';`
    },
    styleguideComponents: {
        Wrapper: path.resolve(__dirname, 'styleguide', 'components', 'Wrapper'),
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
                ],
            },
            plugins: [
                new webpack.NormalModuleReplacementPlugin(/electron/, function (resource) {
                    resource.request = path.resolve(__dirname, 'styleguide', 'stubs', 'electron.stub.js');
                })
            ]
        };
    }
};