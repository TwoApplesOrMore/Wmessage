'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');

var gulp = require('gulp');
var webserver = require('gulp-webserver');

livereload({ start: true });

gulp.task('sass', function () {
    gulp.src('static/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('static/sass/css'))
        .pipe(livereload());
});

gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch('static/sass/*.scss', ['sass']);
});

gulp.task('webserver', function () {
    gulp.src('./public')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true,
        }))
        ;
});