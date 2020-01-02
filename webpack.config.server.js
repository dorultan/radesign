const webpack = require('webpack');
const sharedConfig = require('./webpack.config.shared');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const serverConfig = {
	name: 'server',
	mode: sharedConfig.mode,
	entry: ['babel-polyfill', 'webpack/hot/poll?1000', './server/index.js'],
	target: 'node',
	externals: [nodeExternals({whitelist: ['webpack/hot/poll?1000']})],
	output: {
		path: sharedConfig.path,
		filename: 'server.js',
		publicPath: sharedConfig.publicPath
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
		new webpack.EvalSourceMapDevToolPlugin(),
		new CleanWebpackPlugin('./dist'),
		new StartServerPlugin('server.js'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
        "process.env": {
            "BUILD_TARGET": JSON.stringify('server'),
						"PORT": JSON.stringify(process.env.PORT),
						"DB_USERNAME":  JSON.stringify(process.env.DB_USERNAME),
						"DB_PASSWORD":  JSON.stringify(process.env.DB_PASSWORD),
						"DB_HOST":  JSON.stringify(process.env.DB_HOST),
						"DB_NAME":  JSON.stringify(process.env.DB_NAME)
        }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
		new ProgressBarPlugin(),
		...sharedConfig.plugins
	]
};
module.exports = serverConfig;
