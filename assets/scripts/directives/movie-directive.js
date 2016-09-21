angular
	.module('movieApp')
	.directive('movieDirective', movieDirective);

function movieDirective() {
	var directive = {
		restrict: 'E',
		templateUrl: 'templates/movie-directive.html',
		replace: true,
		scope: {

		},
		controllerAs: 'movieCtrl',
		controller: ['$http', function ($http) {
			var vm = this;
			// vm.test = 'this is a test';
			vm.movie = {};
			vm.getMovie = function() {
				$http({
					method: 'GET',
					url: 'http://www.omdbapi.com/?s=Batman&page=2&apikey=96c42c1a',
				}).then(function successCallback(response) {
					console.log(response.data);
					vm.movie = response.data;
				}, function errorCallback(error){
					console.log('There was an error getting the data (movie-directive.js): ', error);
				})
			}
			vm.getMovie();
		}]
	}
	return directive;
}

