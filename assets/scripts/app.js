angular.module('movieApp', ['ngRoute'])
	.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/movies.html',
			controller: 'IndexController',
			controllerAs: 'indexCtrl'
		})
		.when('/:id', {
			templateUrl: 'templates/show.html',
			controller: 'ShowController',
			controllerAs: 'showCtrl'
		}).otherwise({
			redirectTo: '/' 
		});

	$locationProvider.html5Mode({
			enabled: true,
			requireBase: true
	});
}


