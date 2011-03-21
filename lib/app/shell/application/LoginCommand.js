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
	'promise'
], function (compose, promise) {
	return compose(function LoginCommand() {
	},
	{
		execute: function (event) {
			this.event = event;
			return this.users.get(event.username);
		},
		results: function (user) {
			if (user && user.password === this.event.password) {
				this.session.set('user', user);
			}
			else {
				throw 'invalid user/password';
			}
		},
		error: function (error) {
			console.log('login error: ', error);
		}
	});
});
