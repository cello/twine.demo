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
	'dijit/_Widget'
], function (d, _Widget) {
	return d.declare([_Widget], {
		templateString: '<div class="loading vbox spacer"><h1>loading...</h1></div>',

		buildRendering: function () {
			this.domNode = d._toDom(this.templateString);
		},

		onShow: function () {
			var node = this.domNode;
			if (!this._moduleLoaded) {
				this._moduleLoaded = true;
				this.loadModule().then(function (module) {
					module.placeAt(node, 'only');
				});
			}
		}
	});
});
