/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define(['compose', 'array'], function (Compose, array) {
	return Compose(function KernelListener(id) {
		this.id = id || this.id;
		this._listeners = [];
	}, {
		id: 'Kernel Listener Fiber',

		init: function (kernel) {
			var listeners = this._listeners;

			listeners.push(kernel.modelRegistry.on('modelAdded', function (model) {
				console.log('on modelAdded: ', this, model);

				listeners.push(model.on('componentResolved', function (component) {
					console.log('on componentResolved: ', this, component);
				}));

				listeners.push(model.on('componentReleased', function (component) {
					console.log('on componentReleased: ', this, component);
				}));
			}));
		},

		terminate: function () {
			console.log('KernelListener fiber terminate');
			array.forEach(this._listeners, function (listener) {
				listener.stop();
			});
		}
	});
});
