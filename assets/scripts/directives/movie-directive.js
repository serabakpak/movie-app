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
			vm.test = 'this is a test';
		}]
	}
	return directive;
}











// function cityDirective() {
// 	var directive = {
// 		restrict: 'E',	
// 		templateUrl: './templates/city-directive.html',
// 		replace: true,
// 		scope: {			 
// 			data: '='			
// 		},
// 		controllerAs: 'cityCtrl',
// 		controller: ['$http', function ($http) {
// 						var vm = this;
// 						vm.test = 'this is a test';
// 						vm.city = '';
						
// 						vm.getWeather = function() {
// 							// vm.modifiedCity = vm.city.toLowerCase().replace(' ','+');
// 							$http({
// 						    	method: 'GET',
// 						   		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + vm.city + '&APPID=c51dfe23e4076c20ae0a044c49d36736'
// 						  	}).then(function successCallback(response) {
// 						    	console.log(response.data);
// 						    	vm.data = response.data;
// 						 	}, function errorCallback(response) {
// 						 		console.log('There was an error getting the data', response);
// 						 	});
// 						 }
// 					}]
// 		};
// 	return directive;
// };