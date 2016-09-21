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
			vm.title = '';
			vm.year = '';
			vm.type = '';
			vm.api = '&apikey=96c42c1a',
			vm.getMovie = function() {
				
				$http({
					method: 'GET',
					url: 'http://www.omdbapi.com/?s='+vm.title +'&y='+vm.year+'&type=' +vm.type + vm.api,
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

