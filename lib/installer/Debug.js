/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define([
	'compose',
	'../fiber/KernelListener',
	'../fiber/AsyncContributor'
], function (Compose, KernelListener, AsyncContributor) {
	return Compose({
		install: function (container) {
			// add a kernel listener fiber
			container.addFiber(KernelListener());
			// add an asynchronous model builder contributor
			container.addFiber(AsyncContributor());

			// add a component model
			container.kernel.addComponentModel({
				id: 'component model',
				instances: ['a', 'b', 'c']
			}).then(function (model) {
				console.log('model processing complete: ', model);
			});
		}
	});
});
