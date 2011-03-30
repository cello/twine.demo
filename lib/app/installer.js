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
					//navigation
					'twine/navigation/Fiber'
				],
				components: [
					{
						id: 'Shell',
						module: 'demo/app/shell/presentation/Container',
						deps: {
							navbar: 'Navbar',
							stack: 'MainStack'
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
						id: 'MainStack',
						module: 'dijit/layout/StackContainer',
						mixin: {
							'class': 'vbox spacer',
							route: function (event) {
								console.log('hey... route was called! ', arguments);
								if (!d.some(this.getChildren(), function (child) {
									if (child.target === event.target) {
										this.selectChild(child);
										return true;
									}
									else {
										return false;
									}
								}, this)) {
									console.log('no child found for target ', event.target);
								}
							}
						},
						route: /^demo\.(.*)$/
					},
					{
						id: 'Home',
						module: 'demo/app/home/presentation/Home',
						deps: {
							stack: 'MainStack'
						},
						mixin: {
							target: 'demo.home'
						}
					},
					{
						id: 'LoginCommand',
						module: 'demo/app/shell/application/LoginCommand',
						listen: 'demo/app/shell/application/LoginEvent',
						lifestyle: 'dynamic',
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
					// XXX: change this to be a navigation event
					// resolve the home page as the default page in the main stack
					container.resolve('Home');

					shell.placeAt(d.body());
					shell.startup();
				});
			});
		}
	};
});
