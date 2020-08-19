const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const package = require('./package.json');
const nodeExternals = require('webpack-node-externals');
const DtsBundleWebpack = require('dts-bundle-webpack');

module.exports = {
	entry: [
		'./src/index.ts'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: "commonjs2"
	},
	devtool: "source-map",
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	target: 'electron-renderer',
	externals: [nodeExternals({
		modulesDir: './node_modules',
		whitelist: [/webpack-dev-server/, /webpack\/hot/],
	})],
	plugins: [
		new DtsBundleWebpack({
			name: '@getflywheel/local-components',
			main: './dist/index.d.ts',
			out: '../dist/typings.d.ts'
		}),
		new ExtractCssChunks({
			filename: 'scoped.css',
			chunkFilename: '[id].css',
			hot: true,
			cssModules: true,
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(css|sass|scss)$/,
				use: [
					{
						loader: ExtractCssChunks.loader,
						options: {}
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
										inlineStyles: { onlyMatchedOnce: false },
									},
								],
							},
						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 16384
						}
					}
				]
			},
			/**
			 * SVGs inside CSS still need to be loaded with the URL loader instead of being converted to
			 * React components
			 */
			{
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
		],
	},
	node: {
		__dirname: false,
		fs: false,
		path: false,
	}
};
