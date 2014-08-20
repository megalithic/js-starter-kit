'use strict';
var webpack = require("webpack");

module.exports = {
  output: {
    path: "build",
    filename: 'app.js'
  },

  cache: true,
  debug: true,
  devtool: true,
  watch: false,
  target: "web",
  entry: './src/js/main.js',

  stats: {
    colors: true,
    reasons: false
  },

  resolve: {
    // modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ['','.js','.jsx']
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      }, {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
      }, {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      }, {
        test: /\.jsx$/,
        loader: 'jsx-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
