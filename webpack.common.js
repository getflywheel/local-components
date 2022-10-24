const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
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
	externalsPresets: { electronRenderer: true },
	externals: [
		nodeExternals({
			modulesDir: './node_modules',
			allowlist: [/webpack-dev-server/, /webpack\/hot/],
		}),
	],
	plugins: [
		new MiniCSSExtractPlugin({
			filename: 'scoped.css',
			chunkFilename: '[id].css',
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
				loader: MiniCSSExtractPlugin.loader,
				options: {},
			}),
			sharedRules.reactSvg,
			sharedRules.images,
			sharedRules.cssSvg,
		],
	},
	node: false,
};
