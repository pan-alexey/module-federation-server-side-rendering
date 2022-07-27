const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "src", "widget.client.js"),
  mode: 'production',
  // mode: 'development',
  target: "web",
  output: {
    filename: "widget.js",
    path: path.resolve(__dirname, "widget-2/client"),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  externals: {
    'react': 'React',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};