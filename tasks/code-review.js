'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var paths = {
  javascript: [
      './*.js',
      './tasks/*.js',
      './src/**/*.js',
      './components/stampingservice/**/*.js',
      // './components/bitcore-playground/**/*.js',
      '!./node_modules/**/*',
      '!./components/stampingservice/components/**/*',
      '!./components/stampingservice/node_modules/**/*'
  ]
};

gulp.task('code-review', function(cb) {
  runSequence(['jscs-jshint', 'scss-lint'], cb);
});

gulp.task('jscs-jshint', function() {
  return gulp.src(paths.javascript, {
    base: './'
  })
  .pipe($.cached('jscs-jshint'))
        .pipe($.jscs({
          fix: true
        }))
        .pipe($.jscs.reporter())
        .pipe($.if(!gulp.environment.development, $.jscs.reporter(
            'fail')))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.if(!gulp.environment.development, $.jshint.reporter(
            'fail')))
        // save jscs fixes
        .pipe(gulp.dest('.'));
});

gulp.task('scss-lint', function() {
  return gulp.src([
          './src/_styles/**/*.scss',
          './src/styles/**/*.scss',
          '!./src/_styles/_shame.scss'
      ])
      .pipe($.cached('scss-lint'))
      .pipe($.sassLint())
      .pipe($.sassLint.format())
      .pipe($.if(!gulp.environment.development, $.sassLint.failOnError()));
});
