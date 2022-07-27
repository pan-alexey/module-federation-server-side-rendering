const path = require('path');

module.exports = {
  entry: path.join(__dirname, "./src/index.jsx"),
  mode: 'production',
  target: "web",
  output: {
    filename: "root.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: {
    'react': 'React',
    'react-dom' : 'ReactDOM',
  },

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