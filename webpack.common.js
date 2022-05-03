const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const DtsBundleWebpack = require('dts-bundle-webpack');
const sharedRules = require('./webpack/shared-rules');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'commonjs2',
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	target: 'electron-renderer',
	externals: [
		nodeExternals({
			modulesDir: './node_modules',
			whitelist: [/webpack-dev-server/, /webpack\/hot/],
		}),
	],
	plugins: [
		new DtsBundleWebpack({
			name: '@getflywheel/local-components',
			main: './dist/index.d.ts',
			out: '../dist/typings.d.ts',
		}),
		new ExtractCssChunks({
			filename: 'scoped.css',
			chunkFilename: '[id].css',
			hot: true,
			cssModules: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			sharedRules.sass({
				loader: ExtractCssChunks.loader,
				options: {},
			}),
			sharedRules.reactSvg,
			sharedRules.images,
			sharedRules.cssSvg,
		],
	},
	node: {
		__dirname: false,
		fs: false,
		path: false,
	},
};
