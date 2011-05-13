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
	'dijit/_Container',
	'dojo/text!./Container.html'
], function (d, _WidgetBase, mustache, _Container, templateString) {
	return d.declare([_WidgetBase, mustache, _Container], {
		templateString: templateString,
		tPoints: ['headerNode', 'bodyNode', 'footerNode'],

		postCreate: function () {
			this.inherited(arguments);
			this.navbar.placeAt(this.headerNode, 'first');
			this.stack.placeAt(this.bodyNode);
		}
	});
});
