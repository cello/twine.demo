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
	'dojo/store/Memory'
	// see http://bugs.dojotoolkit.org/ticket/12491
	//'dojo/store/Observable'
], function (Memory) {
	var users = [
			{
				username: 'username',
				password: 'secret'
			}
		],
		store = new Memory({
			data: users,
			idProperty: 'username'
		});

	return store;
});
