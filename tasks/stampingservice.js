'use strict';

var gulp = require('gulp');

gulp.task('stampingservice', function() {
  gulp.src('components/stampingservice/**', {
    base: 'components/stampingservice/'
  }).pipe(gulp.dest('dist/stampingservice'));
});
