// Here we declare the main module (app)
angular
	.module('toDoList', [
		// here we define any global dependencies
		'ui.router',
		// then come the features
		'toDoList.completed',
		'toDoList.create',
		'toDoList.list',
		// then come the components
		'toDoList.component.navbar'
	])
	.config(appConfig);

function appConfig($urlRouterProvider) {

	// setting the default route if route doesn't exist
	$urlRouterProvider.otherwise('/');
}