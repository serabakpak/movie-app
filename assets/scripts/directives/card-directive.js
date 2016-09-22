angular
	.module('movieApp')
	.directive('cardDirective', cardDirective);

function cardDirective() {
	var directive = {
		restrict: 'E',
		templateUrl: 'templates/card-directive.html',
		replace: true,
		// ask why this breaks code
		scope: {
			oneMovie : '='
		}

	}
	return directive;
}