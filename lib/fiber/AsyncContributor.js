/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define(['compose', '../contributor/Async'], function (Compose, Async) {
	return Compose(function AsyncContributor(id) {
		this.id = id || this.id;
	}, {
		id: 'Async Contributor Fiber',
		init: function (kernel) {
			kernel.modelBuilder.addProcessor(Async());
		},
		terminate: function () {
			console.log('AsyncContributor fiber terminate');
		}
	});
});
