var gulp = require('gulp');
var webpack = require("webpack");
var webpackConfig = require("../../webpack.config.js");
var gutil = require('gulp-util');

// if (gulp.env.production) {
//   webpackConfig.plugins = webpackConfig.plugins.concat(new webpack.optimize.UglifyJsPlugin());
//   webpackConfig.output.filename = "main-[hash].js";
// }

var execWebpack = function(config) {
  return webpack(config, function(err, stats) {
    if (err) {
      throw new gutil.PluginError("execWebpack", err);
    }
    return gutil.log("[execWebpack]", stats.toString({
      colors: true
    }));
  });
};

gulp.task('webpack', function(callback) {
  execWebpack(webpackConfig);
  return callback();
});

