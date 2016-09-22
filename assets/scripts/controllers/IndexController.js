angular
	.module('movieApp')
	.controller('IndexController', IndexController);

IndexController.$inject = ['$http']
function IndexController($http) {
	var vm = this;
	vm.apiKey = '?api_key=ae01f4c171d182bb662a0f70e648aabf';
	vm.title='';
	vm.types=[
		{
			description: 'Top Rated',
			urlPath : 'top_rated'
		},
		{
			description: 'Now Playing',
			urlPath : 'now_playing'
		},
		{
			description: 'Upcoming',
			urlPath : 'upcoming'
		},
		{
			description: 'Popular',
			urlPath : 'popular'
		}
	];
	

	vm.getTopMovies = function(type) {
		$http({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/movie/'+ type +vm.apiKey,
		}).then(function successCallback(response) {
			console.log(response.data);
			vm.movies = response.data;
		}, function errorCallback(error){
			console.log('There was an error getting all movies (IndexController.js): ', error);
		})
	}
	vm.getMovies = function() {
		$http({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/search/movie'+vm.apiKey+'&language=en-US&query='+vm.title,
		}).then(function successCallback(response) {
			console.log(response.data);
			vm.movies = response.data;
		}, function errorCallback(error){
			console.log('There was an error getting all movies (IndexController.js): ', error);
		})
	}

}
