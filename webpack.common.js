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
		whitelist: ['react-hot-loader', /webpack-dev-server/, /webpack\/hot/],
	})],
	plugins: [
		new DtsBundleWebpack({
			name: '@getflywheel/local-components',
			main: './src/index.d.ts',
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
	node: {
		__dirname: false,
		fs: false,
		path: false,
	}
};
