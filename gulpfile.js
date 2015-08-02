    
    var gulp     = require('gulp'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    rename       = require('gulp-rename');

gulp.task('compass', function() {
  gulp.src('sass/*.scss')
    .pipe(compass({
      css: 'css',
      sass: 'sass'
    }))
    .on('error', function(error) {
      // Would like to catch the error here 
      console.log(error);
      this.emit('end');
    })
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

gulp.task('default',['compass'], function() {
	 gulp.watch("sass/*.scss", ['compass']);
});