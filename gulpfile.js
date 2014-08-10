/*
 * mandatory
 *
 * Copyright(c) 2014 konexmedia <info@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@konexmedia.com>
 *
 */

'use strict';

var gulp = require('gulp');
var benchmark = require('gulp-bench');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');

var sequence = require('run-sequence');

gulp.task('lint', function () {
    return gulp.src('./*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    return gulp.src('./index.spec.js')
        .pipe(jasmine());
});

gulp.task('benchmark', function () {
    return gulp.src('./index.performance.js', {read: false})
        .pipe(benchmark());
});

gulp.task('default', function () {
    return sequence('test', 'lint', 'benchmark');
});