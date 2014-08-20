var path = require("path");
var gutil = require("gulp-util");

gutil.log("path stuff fromwebconfig: ", path.join(__dirname, "build"));

module.exports = {
  output: {
    // path: "build",
    // publicPath: "/build/",
    // filename: 'app.js'
    path: path.join(__dirname, "build"),
    publicPath: "/build/",
    contentBase: "./build/",
    filename: "app.js"
  },

  cache: true,
  debug: true,
  // devtool: true,
  watch: false,
  target: "web",
  entry: './src/js/main.js',

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    modulesDirectories: ['bower_components', 'node_modules'],
    extensions: ['','.js','.jsx']
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

    loaders: [
      { test: /\.css$/,   loader: 'style-loader!css-loader' },
      { test: /\.woff$/,  loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.ttf$/,   loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,   loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,   loader: "file-loader?prefix=font/" },
      { test: /\.gif/,    loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg/,    loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png/,    loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.js$/,    loader: 'jsx-loader' },
      { test: /\.jsx$/,   loader: 'jsx-loader?insertPragma=React.DOM' }
    ],

    noParse: /\.min\.js/
  }
};
