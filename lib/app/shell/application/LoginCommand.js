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
			var dfd = promise.defer(),
				user = this.users.get(event.user.username);

			setTimeout(function () {
				dfd.resolve(user);
			}, 500);

			return dfd.promise;
		},
		results: function (user) {
			if (user && user.password === this.event.user.password) {
				this.session.set('user', user);
			}
			else if (this.event.user.username) {
				console.log('invalid user/password');
			}
			else {
				this.session.set('user', null);
			}
		},
		error: function (error) {
			console.log('login error: ', error);
		}
	});
});
