/*
	gulpfile.js
	===========
	Rather than manage one giant configuration file responsible
	for creating multiple tasks, each task has been broken out into
	its own file in gulp/tasks. Any file in that folder gets automatically
	required by the loop in ./gulp/index.js (required below).

	To add a new task, simply add a new task file to gulp/tasks.
*/
// require('./gulp');


var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var express = require('express');
var clean = require('gulp-clean');
var tiny_lr = require('tiny-lr');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var WebpackDevServer = require("webpack-dev-server");

// == COMPASS TASK =============
require('./gulp/tasks/compass');

// == COPY TASK =============
require('./gulp/tasks/copy');

// == IMAGES TASK =============
require('./gulp/tasks/images');

// == BUILD TASK =============
require('./gulp/tasks/build');

// == DEFAULT TASK =============
require('./gulp/tasks/default');

gulp.task('clean', function() {
  return gulp.src('build', {
    read: false
  }).pipe(clean());
});

gulp.task('webpack', function(callback) {
  execWebpack(webpackConfig);
  return callback();
});

gulp.task("dev", ['build'], function(callback) {
  gulp.watch(['./src/**/*'], function(evt) {
    gutil.log("Files changed, re-building..");
    return gulp.run('build');
  });

	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "sourcemap";
	myConfig.debug = true;

  myConfig = webpackConfig;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
      publicPath: "/" + myConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
    .listen(4000, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      gutil.log("[webpack-dev-server]", "http://localhost:4000/webpack-dev-server/index.html");
    });
});

// gulp.task('dev', ['build'], function() {
//   var servers;
//   servers = createServers(4000, 35729);
//   gulp.watch(['./src/**/*'], function(evt) {
//     return gulp.run('build');
//   });
//   return gulp.watch(['./build/**/*'], function(evt) {
//     gutil.log(gutil.colors.cyan(evt.path), 'changed');
//     return servers.lr.changed({
//       body: {
//         files: [evt.path]
//       }
//     });
//   });
// });

// var createServers = function(port, lrport) {
//   var app, lr;
//   lr = tiny_lr();
//   lr.listen(lrport, function() {
//     return gutil.log("LiveReload listening on", lrport);
//   });
//   app = express();
//   app.use(express["static"](path.resolve("./build")));
//   app.listen(port, function() {
//     return gutil.log("HTTP server listening on", port);
//   });
//   return {
//     lr: lr,
//     app: app
//   };
// };

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

