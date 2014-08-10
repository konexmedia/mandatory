/*
 * mandatory
 *
 * Copyright(c) 2014 André König <andre.koenig@konexmedia.com>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@konexmedia.com>
 *
 */

'use strict';

var assert = require('assert');
var util = require('util');

module.exports = function (candidate) {
    var realType = typeof candidate;

    return {
        is: function is (type, message) {
            type = type.toLowerCase();
            message = message || 'Expected ' + type + ' but received ' + realType;

            if ('object' === type) {
                assert.equal(realType === 'object' && !util.isArray(candidate), true, message);
            } else if ('array' === type) {
                assert.equal(util.isArray(candidate), true, message);
            } else {
                assert.equal(realType, type, message);
            }
        }
    };
};