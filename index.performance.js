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

var mandatory = require('./');

module.exports = function benchmark () {
    var id = 0;
    var nme = 'name';
    var obj = {name: 'König'};
    var arr = [0, 1, 2, 3, 4, 5];

    mandatory(id).is('number');
    mandatory(nme).is('string');
    mandatory(obj).is('object');
    mandatory(arr).is('array');
};