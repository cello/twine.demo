/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define(['compose'], function (Compose) {
	return Compose({
		install: function (container) {
			console.log('installing app...');
			container.kernel.addComponentModel({
				id: 'App'
			}).then(function (kernel) {
				var app = container.resolve({
					id: 'App'
				});

				app.on('allDone', function () {
					container.destroy();
				});
			});
		}
	});
});
