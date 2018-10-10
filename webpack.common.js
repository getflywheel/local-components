const path = require('path');

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
						loader: 'style-loader',
						options: {}
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: true,
							importLoaders: 1,
							localIdentName: '[local]_[hash:base64:5]'
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
