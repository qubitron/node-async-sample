var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/server.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'server_bundle.js'
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: __dirname + '/src',
        loader: 'babel-loader'
      }
    ]
  }
};

