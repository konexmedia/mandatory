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

/* global: ,describe,it,expect */

'use strict';

var mandatory = require('./');

describe('The "mandatory" module', function () {
    
    it('should be able to detect a wrong "number"', function () {
        var error = false;

        try {
            mandatory('0').is('number');
        } catch (e) {
            error = true;
            expect(e).toBeDefined();
        }
        
        expect(error).toBe(true);
    });

    it('should be able to detect a wrong "string"', function () {
        var error = false;

        try {
            mandatory(0).is('string');
        } catch (e) {
            error = true;
            expect(e).toBeDefined();
        }
        
        expect(error).toBe(true);
    });

    it('should be able to detect a wrong "object"', function () {
        var error = false;

        try {
            mandatory([]).is('object');
        } catch (e) {
            error = true;
            expect(e).toBeDefined();
        }
        
        expect(error).toBe(true);
    });

    it('should be able to detect a wrong "array"', function () {
        var error = false;

        try {
            mandatory({}).is('array');
        } catch (e) {
            error = true;
            expect(e).toBeDefined();
        }
        
        expect(error).toBe(true);
    });
    
    it('should provide the functionality to change the error message', function () {
        var error = false;
        var message = 'Wrong type';
        
        try {
            mandatory({}).is('array', message);
        } catch (e) {
            error = true;
            expect(e).toBeDefined();
            expect(e.message).toBe(message);
        }

        expect(error).toBe(true);
    });
});