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
var jasmine = require('gulp-jasmine');

gulp.task('test', function () {
    return gulp.src('./index.spec.js')
        .pipe(jasmine());
})