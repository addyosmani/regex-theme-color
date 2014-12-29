/*global describe, it */
'use strict';
var assert = require('assert');
var themeColorRegex = require('../');

describe('regex-theme-color node module', function () {
	it('should match a theme-color meta tag in a string', function (done) {
		assert.equal(themeColorRegex().test('<meta name="theme-color" content="#3372DF">'), true);
		assert.equal(themeColorRegex().test('<meta   name="theme-color" content="#3372DF" >'), true);
		assert.equal(themeColorRegex().test('<meta   name="theme-color" content=\'#3372DF\' >'), true);
		assert.equal(themeColorRegex().test('<meta name=\'theme-color\' content=\'#3372DF\'>'), true);
		done();
	});

	it('should fail if a theme-color is not included in the meta tag', function (done) {
		assert.equal(themeColorRegex().test('<meta name="">'), false);
		assert.equal(themeColorRegex().test('<meta content>'), false);
		done();
	});
	
	it('should fail if a theme-color does not include content', function (done) {
		assert.equal(themeColorRegex().test('<meta name="theme-color">'), false);
		assert.equal(themeColorRegex().test('<meta name="theme-colour">'), false);
		assert.equal(themeColorRegex().test('<meta name="theme-color" content>'), false);
		assert.equal(themeColorRegex().test('<meta name="theme-color" content=>'), false);
		done();
	});
});

