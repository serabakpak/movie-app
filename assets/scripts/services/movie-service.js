angular.module('movieApp')
  .service('MovieService', MovieService);

MovieService.$inject = ['$http', '$q'];
function MovieService($http, $q) {
  var self = this;  
  self.searchQuery = searchQuery;
  self.topQuery = topQuery;
  self.apiKey = '?api_key=ae01f4c171d182bb662a0f70e648aabf';
  self.typesOfMovies = [
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
  function searchQuery(title) {
    console.log('someone requested all the movies for ',title);
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie'+self.apiKey+'&language=en-US&query='+title,
    }).then(function successCallback(response) {
      console.log('here\'s the get all movies response data from the service',response.data);
      self.movies = response.data;
      deferred.resolve(self.movies);
      //rename header here
    }, function errorCallback(error){
      console.log('There was an error getting all movies (IndexController.js): ', error);
      self.movies.error = {error: error};
      deferred.reject(self.movies.error);
    })
    return deferred.promise;
  }

  function topQuery(typeObject) {
    console.log('someone requested all the movies that are: ')
    var deferred = $q.defer();
        $http({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/'+ typeObject.urlPath + self.apiKey,
    }).then(function successCallback(response) {
      self.movies = response.data;
      deferred.resolve(self.movies);
    }, function errorCallback(error){
      console.log('There was an error getting all movies (IndexController.js): ', error);
      self.movies.error = {error: error};
      deferred.reject(self.movies.error);
    })
    return deferred.promise;
  }
}
  
