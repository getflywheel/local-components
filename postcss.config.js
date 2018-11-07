const path = require('path');

module.exports = {
	plugins: [
		require('postcss-modules'),
		require('postcss-url')({
			url: 'inline',
			basePath: path.resolve('./src/styles'),
			optimizeSvgEncode: true,
		})
	]
};
