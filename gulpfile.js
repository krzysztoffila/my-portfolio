const gulp = require('gulp');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();


// Style compilation

function style() {
  return gulp.source('./src/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}

exports.style = style;
