'use strict';

var gulp = require('gulp');
var gulpPlugins = require('gulp-load-plugins');
var $ = gulpPlugins();
var bump = $.bump;
var paths = [
        './bower.json', './package.json'
];

gulp.task('bump', function() {
  gulp.src(paths)
      .pipe(bump())
      .pipe(gulp.dest('./'));
});
