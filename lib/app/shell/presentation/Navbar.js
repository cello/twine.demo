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
	'dijit/_WidgetBase',
	'mustache/Templated',
	'text!./Navbar.html'
], function (d, _WidgetBase, mustache, templateString) {
	return d.declare([_WidgetBase, mustache], {
		templateString: templateString,
		
		postMixInProperties: function () {
			this.inherited(arguments);
			if (this.model) {
				this.model.watch(d.hitch(this, function () {
					this.render();
				}));
			}
		}
	});
});
