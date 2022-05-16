const path = require('path');
const merge = require('webpack-merge');

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/dist`;

module.exports = merge.strategy({
	entry: 'prepend',
})(require('./webpack.common.js'), {
	mode: 'development',
	entry: [`webpack-dev-server/client?http://localhost:${port}/`],
	output: {
		publicPath: `http://localhost:${port}/dist/`,
	},
	devServer: {
		port,
		hot: 'only',
		headers: { 'Access-Control-Allow-Origin': '*' },
		devMiddleware: {
			publicPath,
			writeToDisk: true,
		},
		static: path.join(__dirname, 'dist'),
	},
});
