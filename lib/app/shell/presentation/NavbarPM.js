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
	'dojo/Stateful',
	'promise',
	'../application/LoginEvent',
	'twine/navigation/Event'
], function (d, Stateful, promise, LoginEvent, NavigationEvent) {
	return d.declare(Stateful, {
		constructor: function () {
			var pm = this;
			promise.when(this.moduleStore.query(), function (modules) {
				pm.set('modules', modules);
			});
			this.session.watch('user', function (prop, old, value) {
				pm.set('user', value);
			});
		},
		login: function (user) {
			var model = this;
			this.dispatch(new LoginEvent(user)).then(function () {
				if (!model.session.user) {
					model.set('invalidUser', true);
				}
				else {
					model.set({
						invalidUser: false,
						showLogin: false
					});
				}
			});
		},
		logout: function () {
			this.dispatch(new LoginEvent());
		},
		navigate: function (target) {
			this.dispatch(new NavigationEvent(target));
		}
	});
});
