/**
 * @license Copyright (c) 2011 Cello Software, LLC.
 * All rights reserved.
 * Available via the new BSD License.
 */
/*jslint maxlen: 100, nomen: false, newcap: true, onevar: true, white: true, plusplus: false */
/*global define: false */

define(['compose', '../fiber/KernelListener'], function (Compose, KernelListener) {
	return Compose({
		install: function (container) {
			console.log('Debug install: ', container);
			container.addFiber(KernelListener());
		}
	});
});
