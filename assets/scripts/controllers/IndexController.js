angular
	.module('movieApp')
	.controller('IndexController', IndexController);

IndexController.$inject = ['$http' ,'MovieService']
function IndexController($http, MovieService) {
	var vm = this;
	vm.apiKey = MovieService.apiKey
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
	
	vm.getTopMovies = function(typeObject) {
		console.log(typeObject);
		$http({
			method: 'GET',
			url: 'https://api.themoviedb.org/3/movie/'+ typeObject.urlPath + vm.apiKey,
		}).then(function successCallback(response) {
			vm.type = typeObject.description;
			vm.movies = response.data;
		}, function errorCallback(error){
			console.log('There was an error getting all movies (IndexController.js): ', error);
		})
	}

	vm.getMovies = function() {
		
		MovieService.searchQuery(vm.title).then(function(data){
  		console.log('here\'s the movies data in the controller', data);
  		vm.movies = data;
  	});
	}
	//initialization
	vm.getTopMovies(vm.types[3]);

}
