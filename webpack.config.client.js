const path = require('path');
const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const clientConfig = {

	name: 'client',
	mode: sharedConfig.mode,
	entry: ['./app/index.js'],
	output: {
		path: sharedConfig.output.path,
		filename: 'bundle.js',
		publicPath: sharedConfig.output.publicPath || '/'
	},
	watch: process.NODE_ENV === 'production' ? false : true,
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000
	},
	module: {
		rules: sharedConfig.module.rules
	},

	plugins: [
		new webpack.DefinePlugin({
			isServer: 'false'
		}),
		new MiniCssExtractPlugin({
			name: 'main.css',
			chunkFilename: '[id].css'
		}),
		new LoadablePlugin(),
		...sharedConfig.plugins
	]
};

module.exports = clientConfig;
