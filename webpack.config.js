var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./assets/scripts/main.js',
	],
	output: {
		path: 'dist',
		filename: '/assets/scripts/main.js'
	},
	module: {
		loaders: [
			{
			   test: /\.js$/,
			   loader: 'babel-loader',
			   exclude: /node_modules/,
			   query: {
				   presets: ['es2015']
			   }
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: 'index.html',
				to: 'index.html'
			},
			{
				from: 'assets',
				to: 'assets',
				ignore: [{ glob: 'scripts/**/*', dot: true }]
			}
		])
	]
};
