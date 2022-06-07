const { mergeWithCustomize, customizeObject } = require('webpack-merge');
const path = require('path');

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/dist`;

module.exports = mergeWithCustomize({
	customizeObject: customizeObject({
		entry: 'prepend',
	}),
})(require('./webpack.common.js'), {
	mode: 'development',
	devServer: {
		port,
		hot: 'only',
		headers: { 'Access-Control-Allow-Origin': '*' },
		devMiddleware: {
			publicPath,
			writeToDisk: true,
		},
		client: {
			webSocketURL: {
				hostname: 'localhost',
			},
		},
		static: path.join(__dirname, 'dist'),
	},
});
