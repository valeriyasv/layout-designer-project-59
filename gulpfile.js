const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const pug = require('gulp-pug');

function buildStyles() {
  return src('./app/src/scss/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('./build/css'));
}

gulp.task('pug', function() {
  return gulp.src('./app/src/*.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('./build'))
})

exports.default = buildStyles;
