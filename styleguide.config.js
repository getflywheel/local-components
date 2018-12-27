const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

module.exports = {
    components: 'src/**/[A-Z]*.tsx',
    getComponentPathLine (componentPath) {
        return `import { ${path.basename(componentPath, '.tsx')} } from 'local-components';`
    },
	propsParser: require('react-docgen-typescript').withCustomConfig(
		'./tsconfig.json', // warning: this is critical for all component examples to be displayed
		{
			skipPropsWithoutDoc: false,
				skipPropsWithName: [],
		},
	).parse,
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
			},
		});
    }
};
