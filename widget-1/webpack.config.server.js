var path = require('path');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var serverConfig = {
  entry: path.resolve(__dirname, './src/widget.server.js'),
  target: 'node',
  output: {
    filename: "widget.js",
    chunkFilename: 'module/chunks.js',
    path: path.resolve(__dirname, 'widget-1/server'),
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|GeneralJS|Global)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      // shareScope: 'default',
      name: 'widget-1', // widget name for uniq scope
      library: { type: 'commonjs-module', },
      filename: 'module/container.js',
      exposes: {
        'widget': path.resolve(__dirname, './src/widget.server.js'),
      },
      shared: ["react", "react-dom"],
    }),
  ],
};

module.exports = [serverConfig];
