const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

module.exports = {
    skipComponentsWithoutExample: true,
    getComponentPathLine(componentPath) {
        return `import { ${path.basename(componentPath, '.jsx')} } from 'local-components';`
    },
    components: 'src/**/[A-Z]*.jsx',
    webpackConfig: () => {
        return merge(require('./webpack.common'), {
			target: 'web',
			plugins: [
				new webpack.NormalModuleReplacementPlugin(/electron/, function (resource) {
					resource.request = path.resolve(__dirname, 'styleguide', 'stubs', 'electron.stub.js');
				}),
			]
		});
    }
};
