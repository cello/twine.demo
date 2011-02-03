/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define(['compose'], function (Compose) {
	return Compose(function KernelListener(id) {
		this.id = id || this.id;
	}, {
		id: 'Kernel Listener Fiber',
		init: function (kernel) {
			console.log('fiber init: ', kernel);
			kernel.on('fiberAdded', function (fiber) {
				console.log('on fiberAdded: ', this, fiber);
			});
			kernel.on('modelAdded', function (model) {
				console.log('on modelAdded: ', this, model);
			});
			kernel.on('componentReleased', function (model) {
				console.log('on componentReleased: ', this, model);
			});
			/*
			kernel.addComponentModel({
				id: 'component model',
				instances: ['a', 'b', 'c']
			});
			//*/
		},
		terminate: function () {
			console.log('fiber destroy');
		}
	});
});
