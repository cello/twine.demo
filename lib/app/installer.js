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

define(['promise', 'dojo'], function (promise, d) {
	return {
		install: function (container) {
			return container.configure({
				fibers: [
					// messaging
					'twine/message/Fiber',
					// navigation
					'twine/navigation/Fiber',
					// module lazy-loading
					'twine/module/Fiber'
				],
				components: [
					{
						id: 'Shell',
						module: 'demo/app/shell/presentation/Container',
						deps: {
							navbar: 'Navbar',
							stack: 'ModuleStack'
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
						module: 'demo/app/shell/presentation/NavbarPM',
						deps: {
							moduleStore: 'ModuleStore',
							session: 'Session'
						},
						dispatch: true
					},
					{
						id: 'ModuleStore',
						module: 'demo/app/shell/domain/Modules'
					},
					{
						id: 'Session',
						module: 'dojo/Stateful'
					},
					{
						id: 'Users',
						module: 'demo/app/shell/domain/Users'
					},
					{
						id: 'ModuleStack',
						module: 'demo/app/shell/presentation/ModuleStack',
						deps: {
							home: 'Home',
							about: 'About'
						},
						mixin: {
							'class': 'vbox spacer'
						},
						route: /^demo\.(.*)$/
					},
					{
						id: 'Home',
						module: 'demo/app/pages/presentation/Home',
						moduleLoader: 'demo/app/shell/infrastructure/ModuleLoader'
					},
					{
						id: 'About',
						module: 'demo/app/pages/presentation/About',
						moduleLoader: 'demo/app/shell/infrastructure/ModuleLoader'
					},
					{
						id: 'LoginCommand',
						module: 'demo/app/shell/application/LoginCommand',
						listen: 'demo/app/shell/application/LoginEvent',
						lifestyle: 'twine/lifecycle/Dynamic',
						deps: {
							session: 'Session',
							users: 'Users'
						}
					}
				]
			}).then(function (container) {
				container.resolve({
					id: 'Shell'
				}, {
					heading: 'twine demo app'
				}).then(function (shell) {
					shell.placeAt(d.body());
					shell.startup();
				});
			});
		}
	};
});
