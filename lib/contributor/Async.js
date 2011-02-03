/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define([
	'compose',
	'promise'
], function (Compose, Promise) {
	return Compose({
		process: function (model) {
			var dfd = Promise.defer();
			setTimeout(function () {
				model.asyncTouched = true;
				dfd.resolve(model);
			}, 800);
			return dfd.promise;
		}
	});
});
