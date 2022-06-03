const sass = require('sass');
const packageJson = require('../package.json');

module.exports = {
	sass: (styleLoader) => ({
		test: /\.(css|sass|scss)$/,
		use: [
			styleLoader,
			{
				loader: 'css-loader',
				options: {
					modules: {
						localIdentName: `[local]_[hash:base64:5]_v${packageJson.version.replace(/\./g, '-')}`,
					},
					importLoaders: 1,
				},
			},
			{
				loader: 'resolve-url-loader',
			},
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						logger: sass.Logger.silent,
					},
				},
			},
		],
	}),
	reactSvg: {
		test: /\.svg$/i,
		issuer: /\.[tj]sx?$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					svgoOptions: {
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
	/**
	 * SVGs inside CSS still need to be loaded with the URL loader instead of being converted to
	 * React components
	 */
	cssSvg: {
		test: /\.(svg)$/i,
		issuer: /\.(css|sass|scss)$/,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 16384,
				},
			},
		],
	},
	images: {
		test: /\.(png|jpg|gif)$/i,
		use: [
			{
				loader: 'url-loader',
				options: {
					limit: 16384,
				},
			},
		],
	},
};
