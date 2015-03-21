/*jslint node: true */
/*jshint strict:false */

'use strict';

var gulp = require('gulp'),
    compass = require('gulp-compass'),
    path = require('path'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    svgfallback = require('gulp-svgfallback');


var EXPRESS_PORT = 9000;
var EXPRESS_ROOT = './app';
var LIVERELOAD_PORT = 35729;
var lr;

function startExpress() {
    var express = require('express');
    var app = express();
    app.use(require('connect-livereload')());
    app.use(express.static(EXPRESS_ROOT));
    app.listen(EXPRESS_PORT);
}

function startLivereload() {
    lr = require('tiny-lr')();
    lr.listen(LIVERELOAD_PORT);
}
function notifyLivereload(event) {
    var fileName = require('path').relative(EXPRESS_ROOT, event.path);
    lr.changed({
        body: {
            files: [fileName]
        }
    });
}


gulp.task('clean:styles', function (cb) {
    del([
        './app/styles/css/style.min.css',
        './app/styles/css/style.css'
    ], cb);
});

gulp.task('svgstore', function () {
    return gulp
        .src('./app/img/svgicons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(gulp.dest('./app/img/'));
});

gulp.task('svgfallback', function () {
    return gulp
        .src('./app/img/svgicons/*.svg', {base: './app/img/svgicons/'})
        .pipe(svgfallback())
        .pipe(gulp.dest('./app/img/'));
});


gulp.task('styles', ['clean:styles'], function () {
    return gulp.src('./app/styles/style.scss')
        .pipe(compass({
            config_file: path.join(process.cwd(), 'config.rb'),
                project: path.join(process.cwd(), './'),
                css: './app/styles/css',
                sass: './app/styles',
                style: 'nested'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./app/styles/css'))
        .pipe(notify({ message: 'STYLY HOTOVO!!!' }));
});

gulp.task('clean:scripts', function (cb) {
    del([
        './app/js/main.js',
        './app/js/main.min.js'
    ], cb);
});
gulp.task('scripts',['clean:scripts'], function () {
    return gulp.src('app/js/main/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(notify({ message: 'SKRIPTY HOTOVO!!!' }));
});

gulp.task('images', function () {
    return gulp.src('./app/img/unoptimised/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./app/img/'))
        .pipe(notify({ message: 'IMG HOTOVO!!!' }));
});

gulp.task('clean:vendor', function (cb) {
    del([
        './app/vendor/*'
    ], cb);
});
gulp.task('copy',['clean:vendor'], function () {
    gulp.src(['./bower_components/jquery/dist/*'])
        .pipe(gulp.dest('app/vendor/'))
        .pipe(notify({ message: 'COPY HOTOVO!!!' }));
});


gulp.task('default', function () {
    gulp.start('styles', 'scripts', 'images', 'copy', 'watch');
});


gulp.task('watch', function () {
    startExpress();
    startLivereload();
    gulp.watch('app/styles/*.scss', ['styles']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/js/main/*.js', ['scripts']);
    gulp.watch('app/*.html', notifyLivereload);
    gulp.watch('app/fonts/*', notifyLivereload);
    gulp.watch('app/styles/css/*.css', notifyLivereload);
    gulp.watch('app/js/*.js', notifyLivereload);
});