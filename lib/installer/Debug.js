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
	'../fiber/KernelListener'
], function (compose, KernelListener) {
	return compose({
		install: function (container) {
			// add a kernel listener fiber
			container.addFiber(new KernelListener());
		}
	});
});
