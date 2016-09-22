angular.module('movieApp')
  .service('MovieService', MovieService);

MovieService.$inject = ['$http', '$q'];
function MovieService($http, $q) {
  var self = this;
  self.movies = [];
  self.searchQuery = searchQuery;
  self.apiKey = '?api_key=ae01f4c171d182bb662a0f70e648aabf';
  
  function searchQuery(title) {
    console.log('someone requested all the movies');
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie'+self.apiKey+'&language=en-US&query='+title,
    }).then(function successCallback(response) {
      console.log('here\'s the get all books response data from the service',response.data);
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
  

  // function query() {
  //   console.log('someone requested all the books');
  //   // create a new 'deferred'
  //   var def = $q.defer();
  //   // fire off the request
  //   $http({
  //     method: 'GET',
  //     url: 'https://super-crud.herokuapp.com/books'
  //   }).then(onBooksIndexSuccess, onError);

    
  //   return def.promise;

  //   function onBooksIndexSuccess(response){
  //     console.log('here\'s the get all books response data from the service', response.data);
  //     self.books = response.data.books;
      
  //     def.resolve(self.books);
  //   }
  //   function onError(error){
  //     console.log('there was an error: ', error);
  //     self.books.error = {error: error};
      
  //     def.reject(self.books.error);
  //   }
  // }