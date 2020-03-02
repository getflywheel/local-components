const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const package = require('./package.json');

module.exports = {
    getComponentPathLine (componentPath) {
        return `import { ${path.basename(componentPath, '.tsx')} } from 'local-components';`
    },
	pagePerSection: true,
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
	sections: [
		{
			name: 'Getting started with Add-ons',
			content: 'README.md',
			href: 'https://build.localbyflywheel.com/project/',
			external: true,
		},
		{
			name: 'Components',
			sections: [
				{
					name: 'Alerts',
					components: 'src/components/alerts/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Buttons',
					components: 'src/components/buttons/**/[A-Z]*.tsx',
					ignore: '**/_private/**/*.tsx',
				},
				{
					name: 'Inputs',
					components: 'src/components/inputs/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Layout',
					components: 'src/components/layout/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Loaders',
					components: 'src/components/loaders/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Media',
					components: 'src/components/media/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Menus & Navigation',
					components: 'src/components/menus/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Modules',
					components: 'src/components/modules/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Popups, Modals, and Overlays',
					components: 'src/components/overlays/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Tables',
					components: 'src/components/tables/**/[A-Z]*.tsx',
					ignore: '**/_private/*.tsx',
				},
				{
					name: 'Text',
					components: 'src/components/text/**/[A-Z]*.tsx',
					ignore: '**/_private/**/*.tsx',
				},
				{
					name: 'Private (do not use)',
					components: 'src/components/**/_private/**/*.tsx',
				},
			],
		},
	],
    skipComponentsWithoutExample: true,
	styleguideComponents: {
		Wrapper: path.resolve(__dirname, 'styleguide', 'components', 'Wrapper'),
	},
	styles: { // https://github.com/styleguidist/react-styleguidist/blob/b198d4e06ecd9b24dcbd830e6aded386fefde7d1/src/client/rsg-components/StyleGuide/StyleGuideRenderer.js
		StyleGuide: {
			content: {
				maxWidth: 1100,
			},
			sidebar: {
				width: 230,
			},
			hasSidebar: {
				paddingLeft: 230,
			}
		},
	},
	title: 'Local Style Guide',
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
