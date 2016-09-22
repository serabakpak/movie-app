angular
	.module('movieApp')
	.controller('IndexController', IndexController);

IndexController.$inject = ['$http' ,'MovieService']
function IndexController($http, MovieService) {
	var vm = this;
	vm.type = '';
	vm.title='';
	vm.types = MovieService.typesOfMovies;
	
	vm.getTopMovies = function(typeObject) {
		console.log(typeObject);
		vm.type = typeObject.description;
  	MovieService.topQuery(typeObject).then(function(data){
  		console.log('here\'s the TOP movies data in INDEXCONTROLLER', data);
  		vm.movies = data;
  	})
	}

	vm.getMovies = function() {		
		vm.type = vm.title.charAt(0).toUpperCase() + vm.title.slice(1).toLowerCase();
		MovieService.searchQuery(vm.title).then(function(data){
  		console.log('here\'s the SEARCH movies data in INDEXCONTROLLER', data);
  		vm.movies = data;
  	});

	}
	//initialization
	vm.getTopMovies(vm.types[3]);

}
