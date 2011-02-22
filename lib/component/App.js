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

define(['compose'], function (compose) {
	return compose(function App() {
		console.log('constructing an app... ', this, arguments);
	}, {
		on: function (event, cb) {
			setTimeout(cb, 800);
		}
	});
});
