/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define(['compose', 'promise'], function (Compose, Promise) {
	return Compose({
		install: function (container) {
			console.log('installing app...');
			return container.configure({
				fibers: ['twine/message/Router'],
				components: [
					{
						id: 'App',
						module: 'demo/component/App',
						dispatcher: true
					}
				]
			}).then(function (kernel) {
				Promise.when(container.resolve({
					id: 'App'
				}), function (app) {
					app.dispatch(':)');
					app.on('allDone', function () {
						container.destroy();
					});
				});
			});
		}
	});
});
