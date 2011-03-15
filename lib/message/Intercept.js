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
	function proceed(e) {
		console.log('proceeding...');
		e.proceed();
	}

	function prevent(e) {
		console.log('preventing...');
	}

	return compose(
		function Intercept() {},
		{
			intercept: function (e) {
				console.log('intercepted: ', e.msg.data);
				setTimeout(function () {
					// randomly proceed or prevent
					((Math.round(Math.random() * 2) - 1) ? proceed : prevent)(e);
				}, 350);
			}
		}
	);
});
