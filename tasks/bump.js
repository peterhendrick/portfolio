'use strict';

var gulp = require('gulp'),
    gulpPlugins = require('gulp-load-plugins'),
    $ = gulpPlugins(),
    bump = $.bump,
    paths = [
        './bower.json', './package.json'
    ];

gulp.task('bump', function() {
  gulp.src(paths)
      .pipe(bump())
      .pipe(gulp.dest('./'));
});
