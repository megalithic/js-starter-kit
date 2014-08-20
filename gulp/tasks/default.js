var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', ['build'], function() {
  return setTimeout(function() {
    gutil.log("**********************************************");
    gutil.log("* gulp              (development build)");
    gutil.log("* gulp clean        (rm /dist)");
    gutil.log("* gulp --production (production build)");
    gutil.log("* gulp dev          (build and run dev server)");
    return gutil.log("**********************************************");
  }, 3000);
});

