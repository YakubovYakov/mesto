const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
        publicPath: ''
  },
	mode: 'development',
	devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    port: 8080,
		open: true,
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css'
		}),
	],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: 'ie 11' }]],
          },
        },
      },
			{
        test: /\.css$/i,
        use: [
					MiniCssExtractPlugin.loader, 
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					 }, 
					 'postcss-loader'
				],
      },
			{
				test: /\.(png|jpg|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name].[contenthash] [ext]',
				}
			},
    ], 
  },
};
