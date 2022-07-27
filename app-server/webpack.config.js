var path = require('path');
const nodeExternals = require('webpack-node-externals');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var serverConfig = {
  entry: [path.resolve(__dirname, 'server.js')],
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  externals: [nodeExternals()],
  optimization: {
    minimize: false,
  },
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
      name: 'website1',
      library: { type: 'commonjs-module' },
      filename: 'container.js',
      shared: ["react", "react-dom"],
    }),
  ],
};

module.exports = [serverConfig];
