const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const package = require('./package.json');

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
        return merge.strategy({
			plugins: 'replace',
			module: 'replace',
		})(require('./webpack.common'), {
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
			module: {
				rules: [
					{
						test: /\.tsx?$/,
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						},
						exclude: /node_modules/
					},
					{
						test: /\.(css|sass|scss)$/,
						use: [
							{
								loader: 'style-loader'
							},
							{
								loader: 'css-loader',
								options: {
									modules: true,
									sourceMap: true,
									importLoaders: 1,
									localIdentName: '[local]_[hash:base64:5]_v' + package.version.replace(/\./g, '-'),
								}
							},
							{
								loader: 'resolve-url-loader',
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true,
								}
							},
						]
					},
					{
						test: /\.(png|jpg|gif|svg)$/i,
						use: [
							{
								loader: 'url-loader',
								options: {
									limit: 16384
								}
							}
						]
					}
				],
			},
		});
    }
};
