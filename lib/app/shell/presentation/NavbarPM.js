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
	'dojo/Stateful'
], function (d, Stateful) {
	var modules = [
			{
				id: 'home',
				label: 'Home'
			},
			{
				id: 'about',
				label: 'About'
			},
			{
				id: 'clients',
				label: 'Clients'
			},
			{
				id: 'contact',
				label: 'Contact'
			}
		],
		user = {
			name: 'username'
		},
		pm = new Stateful({
			modules: modules
		});

	// simulate a login to demonstrate a change in state
	setTimeout(function () {
		pm.set('user', user);
	}, 2500);

	return pm;
});
