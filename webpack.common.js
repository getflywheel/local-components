const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const package = require('./package.json');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: "commonjs2"
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	target: 'electron-renderer',
	plugins: [
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
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
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
};
