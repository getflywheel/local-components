const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/dist`;

module.exports = merge.strategy({
	entry: 'prepend',
})(require('./webpack.common.js'), {
	mode: 'development',
	entry: [
		`webpack-dev-server/client?http://localhost:${port}/`,
		'webpack/hot/only-dev-server',
	],
	output: {
		publicPath: `http://localhost:${port}/dist/`,
	},
	devServer: {
		port,
		publicPath,
		hot: true,
		headers: {'Access-Control-Allow-Origin': '*'},
		contentBase: path.join(__dirname, 'dist'),
		watchOptions: {
			aggregateTimeout: 300,
			ignored: /node_modules/,
			poll: 100
		},
	},
	plugins: [
		new WriteFilePlugin(),
		new webpack.HotModuleReplacementPlugin(),
	]
});
