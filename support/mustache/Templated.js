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
	'./_base'
], function (d, mustache) {
	var dfe = d.forEach,
		empty = {};

	return d.declare(null, {
		declaredClass: 'mustache_Templated',

		// tEvents:
		//	{
		//		'.foo': 'onSomething:handler'
		//	}
		// any nodes that match the selector (.foo) will have the handler (handler) connected to
		// the event (onSomething).  these are automatically managed when the template is rendered
		// or destroyed.  this is currently only good for node events - doesn't work for widgets.
		tEvents: null,

		// this is an array of ids which will map to attach points.  the name in the array will
		// be prefixed with the widget's id + '-'.
		// for example, if the widget's id is 'widgetFoo' and tPoints is ['bar'] then
		// this.bar will be the node with id 'widgetFoo-bar'.
		tPoints: null,

		buildRendering: function () {
			this.render();
		},

		render: function () {
			this.detachEvents();
			this.detachPoints();

			var node,
				template = d.trim(mustache.to_html(this.templateString, this, this.partials || {}));

			if (this.domNode) {
				node = d.place(template, this.domNode, 'before');
				this.destroyDescendants();
				d.destroy(this.domNode);
			}
			else {
				node = d._toDom(template);
			}
			this.domNode = node;

			this.attachEvents();
			this.attachPoints();
		},

		attachEvents: function () {
			var sel,
				tEvents = this.tEvents || {},
				tConnects = this._tConnects = [];

			for (sel in tEvents) {
				if (!(sel in empty)) {
					tConnects.push.apply(tConnects, d.query(sel, this.domNode).map(function (n) {
						var connection = tEvents[sel].split(':');
						return d.connect(n, connection[0], this, connection[1]);
					}, this));
				}
			}
		},

		attachPoints: function () {
			dfe(this.tPoints, function (p) {
				// d.query like this is the only way i found to query nodes outside the document
				this[p] = d.query('[id=' + this.id + '-' + p + ']', this.domNode)[0];
			}, this);
		},

		detachEvents: function () {
			dfe(this._tConnects || [], d.disconnect);
		},

		detachPoints: function () {
			dfe(this.tPoints, function (p) {
				delete this[p];
			}, this);
		},

		destroyRendering: function () {
			this.detachEvents();
			this.detachPoints();
			this.inherited(arguments);
		}
	});
});