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

define(['compose', 'promise'], function (compose, promise) {
	return compose({
		install: function (container) {
			console.log('installing app...');
			return container.configure({
				fibers: ['twine/message/Fiber'],
				components: [
					{
						id: 'App',
						module: 'demo/component/App',
						dispatch: true
						/*
						deps:
						listen:
						subscribe:
						publish:
						intercept:
						*/
					},
					{
						id: 'interceptor',
						module: 'demo/message/Intercept',
						intercept: 'demo/message/Hello'
					},
					{
						id: 'command',
						module: 'demo/command/Hello',
						listen: 'demo/message/Hello'
					}
				]
			}).then(function (kernel) {
				promise.when(container.resolve({
					id: 'App'
				}), function (app) {
					app.hello();
					app.on('allDone', function () {
						container.destroy();
					});
				});
			});
		}
	});
});
