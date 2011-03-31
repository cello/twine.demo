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
	'dojo',
	'dijit/layout/StackContainer'
], function (d, StackContainer) {
	return d.declare(StackContainer, {
		postCreate: function () {
			this.inherited(arguments);
			this.home.placeAt(this);
			this.about.placeAt(this);
		},

		route: function (event, match, id) {
			d.some(this.getChildren(), function (child) {
				if (child === this[id]) {
					this.selectChild(child);
					return true;
				}
				else {
					return false;
				}
			}, this);
		}
	});
});
