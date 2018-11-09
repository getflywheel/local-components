const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

module.exports = {
    components: 'src/**/[A-Z]*.jsx',
    getComponentPathLine(componentPath) {
        return `import { ${path.basename(componentPath, '.jsx')} } from 'local-components';`
    },
    require: [
        path.join(__dirname, './src/global.sass'),
    ],
    skipComponentsWithoutExample: true,
	styleguideComponents: {
		Wrapper: path.resolve(__dirname, 'styleguide', 'components', 'Wrapper'),
	},
    webpackConfig: () => {
        return merge(require('./webpack.common'), {
			target: 'web',
			plugins: [
				new webpack.NormalModuleReplacementPlugin(/electron/, function (resource) {
					resource.request = path.resolve(__dirname, 'styleguide', 'stubs', 'electron.stub.js');
				}),
			],
			node: {
				__dirname: true,
				path: true,
			}
		});
    }
};
