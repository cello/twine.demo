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
	'dojo/text!./Navbar.html'
], function (d, _WidgetBase, mustache, templateString) {
	return d.declare([_WidgetBase, mustache], {
		templateString: templateString,

		tEvents: {
			'.login': 'onclick:toggleLogin',
			'.modulelist': 'onclick:navigate',
			'.currentuser': 'onclick:profile',
			'.loginform': 'onsubmit:login'
		},

		tPoints: ['loginForm'],

		postMixInProperties: function () {
			this.inherited(arguments);
			this.model.watch(d.hitch(this, function () {
				this.render();
			}));
		},

		toggleLogin: function (e) {
			d.stopEvent(e);
			var model = this.model;

			if (!this.model.user) {
				model.set('showLogin', !model.showLogin);
			}
			else {
				this.model.logout();
			}
		},

		login: function (e) {
			d.stopEvent(e);
			this.model.login(d.formToObject(e.target));
		},

		navigate: function (e) {
			d.stopEvent(e);
			var href = e.target.href;
			if (href) {
				this.model.navigate(href.replace(/^.*#/, 'demo.'));
			}
		},

		profile: function (e) {
			d.stopEvent(e);
			console.log('user profile requested');
		}
	});
});
