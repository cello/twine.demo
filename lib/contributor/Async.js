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

define([
	'compose',
	'promise'
], function (compose, promise) {
	return compose({
		process: function (model) {
			var dfd = promise.defer();
			setTimeout(function () {
				model.asyncTouched = true;
				dfd.resolve(model);
			}, 800);
			return dfd.promise;
		}
	});
});
