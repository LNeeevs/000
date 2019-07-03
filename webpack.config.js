const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/App.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 2000,
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ["env"]["es2015"]
      },
    }],
  },
}
