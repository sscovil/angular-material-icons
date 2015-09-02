'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({lazy: true});

gulp.task('lint', function() {
    return gulp.src([
        'angular-material-icons.js',
        'demo.js'
    ])
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}));
});

gulp.task('uglify', ['lint'], function() {
    var rename = require('gulp-rename');
    var uglify = require('gulp-uglify');

    return gulp.src('./angular-material-icons.js')
        .pipe(uglify())
        .pipe(rename(dotMinExtension))
        .pipe(gulp.dest('./'))
    ;
});

gulp.task('default', ['lint']);

module.exports = gulp;

function dotMinExtension(path) {
    path.extname = '.min' + path.extname;
}
