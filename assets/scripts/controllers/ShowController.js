angular
	.module('movieApp')
	.controller('ShowController', ShowController);

ShowController.$inject = ['$http']
function ShowController($http) {
	var vm = this;
	vm.idPath = window.location.pathname.replace('/movie-app/', '')
	vm.apiKey = '?api_key=ae01f4c171d182bb662a0f70e648aabf'
	vm.getOneMovie = function() {
		$http({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/movie'+ vm.idPath + vm.apiKey + '&language=en-US'
		}).then(function successShow(response) {
			console.log(response);
			vm.showMovie = response.data;
		}, function errorShow(error){
			console.log('There was an error getting one movie (ShowController.js: ', error);
		})
	}
	vm.getOneMovie();
}