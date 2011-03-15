/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jshint
    bitwise: false, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, maxlen: 100,
    newcap: true, noarg: true, noempty: true, onevar: true, passfail: false, undef: true,
    white: true
*/
/*global define: false, require: false */

define(['compose', 'promise'], function (compose, promise) {
	return compose({
		decide: function () {
			var dfd = promise.defer();

			setTimeout(function () {
				// randomly decide
				dfd.resolve((Math.round(Math.random() * 2) - 1) ? true : false);
			}, 350);
			return dfd.promise;
		}
	});
});