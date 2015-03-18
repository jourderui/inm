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
    del = require('del');

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


gulp.task('scripts', function () {
    return gulp.src('app/js/main/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/js/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js/main'))
        .pipe(notify({ message: 'SKRIPTY HOTOVO!!!' }));
});

gulp.task('images', function () {
    return gulp.src('./app/img/unoptimised/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('./app/img/'))
        .pipe(notify({ message: 'IMG HOTOVO!!!' }));
});

gulp.task('copy', function () {
    gulp.src(['./node_modules/bootstrap-sass/assets/fonts/**/*'])
        .pipe(gulp.dest('app/fonts/'));
    gulp.src('./node_modules/restangular/node_modules/lodash/dist/lodash.underscore.min.js')
        .pipe(gulp.dest('app/vendor/'))
        .pipe(notify({ message: 'COPY HOTOVO!!!' }));
});



gulp.task('clean', function (cb) {
    del(['app/styles/css/*', 'app/js/main/*', 'app/img/opt/*'], cb);
});

gulp.task('default', ['clean', 'watch'], function () {
    gulp.start('styles', 'scripts', 'images', 'copy');
});


gulp.task('watch', function () {
    startExpress();
    startLivereload();
    gulp.watch('app/*.html', notifyLivereload);
    gulp.watch('app/temp/*.html', notifyLivereload);
    gulp.watch('app/styles/css/*.css', notifyLivereload);
    gulp.watch('app/js/*.js', notifyLivereload);
    gulp.watch('app/styles/*.scss', ['styles']);
    /* gulp.watch('app/js/*.js', ['scripts']); */
    gulp.watch('app/img/*.png', ['images']);
    gulp.watch('app/img/*.jpg', ['images']);
});