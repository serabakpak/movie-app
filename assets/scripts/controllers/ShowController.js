angular
	.module('movieApp')
	.controller('ShowController', ShowController);

ShowController.$inject = ['$http']
function ShowController($http) {
	var vm = this;

	vm.getOneMovie = function() {
		$http({
			method: 'GET',
			url: 'http://www.omdbapi.com/?t=batman&y=&plot=full&r=json'
		}).then(function successShow(response) {
			console.log(response);
			vm.showMovie = response.data;
		}, function errorShow(error){
			console.log('There was an error getting one movie (SearchController.js: ', error);
		})
	}
	vm.getOneMovie();
}