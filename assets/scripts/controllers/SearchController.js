angular
	.module('movieApp')
	.controller('SearchController', SearchController);

SearchController.$inject = ['$http']
function SearchController($http) {
	var vm = this;
	vm.test = 'this is a test';
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
			vm.movies = response.data;
		}, function errorCallback(error){
			console.log('There was an error getting all movies (SearchController.js): ', error);
		})
	}

	vm.getOneMovie = function() {
		$http({
			method: 'GET',
			url: 'http://www.omdbapi.com/?t=batman&y=&plot=full&r=json'
		}).then(function successShow(response) {
			console.log(response);
		}, function errorShow(error){
			console.log('There was an error getting one movie (SearchController.js: ', error);
		})
	}
}



	


