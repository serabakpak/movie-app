angular
	.module('movieApp')
	.directive('cardDirective', cardDirective);

function cardDirective() {
	var directive = {
		restrict: 'E',
		templateUrl: 'templates/card-directive.html',
		replace: true,
		scope: {
			oneMovie : '='
		}

	}
	return directive;
}