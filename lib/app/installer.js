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

define(['compose', 'promise', 'dojo'], function (compose, promise, d) {
	return compose({
		install: function (container) {
			return container.configure({
				fibers: ['twine/message/Fiber'],
				components: [
					{
						id: 'App',
						module: 'demo/app/shell/presentation/Container',
						dispatch: true,
						deps: {
							navbar: 'Navbar'
						}
					},
					{
						id: 'Navbar',
						module: 'demo/app/shell/presentation/Navbar',
						deps: {
							model: 'NavbarPM'
						}
					},
					{
						id: 'NavbarPM',
						module: 'demo/app/shell/presentation/NavbarPM'
					},
					{
						id: 'interceptor',
						module: 'demo/message/Intercept',
						intercept: 'demo/message/Hello',
						deps: {
							decider: 'Decider'
						}
					},
					{
						id: 'command',
						module: 'demo/command/Hello',
						listen: 'demo/message/Hello'
					},
					{
						id: 'Decider',
						module: 'demo/component/RandomDecider'
					}
				]
			}).then(function (kernel) {
				promise.when(container.resolve({
					id: 'App'
				}), function (app) {
					app.placeAt(d.body());
					app.startup();
					container.destroy();
				});
			});
		}
	});
});
