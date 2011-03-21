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
	'../application/LoginEvent'
], function (d, Stateful, promise, LoginEvent) {
	return d.declare(Stateful, {
		constructor: function () {
			pm = this;
			promise.when(this.moduleStore.query(), function (modules) {
				pm.set('modules', modules);
			});
			this.session.watch('user', function (prop, old, value) {
				pm.set('user', value);
			});
		},
		login: function () {
			// these values would actually have been obtained from user input
			this.dispatch(new LoginEvent('username', 'secret'));
		},
		logout: function () {
			this.dispatch(new LoginEvent());
		},
		navigate: function (target) {
			console.log('navigate to target... ', target);
		}
	});
});
