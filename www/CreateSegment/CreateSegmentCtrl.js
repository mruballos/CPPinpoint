angular.module('pinpoint.createsegment', ['pinpoint.service.auth'])
.controller('CreateSegmentCtrl', function($scope) {
	
    $scope.show = true;
	$scope.hide = !$scope.show;

	$scope.check = function(button) {
		if (button.clicked == false) {
			var clicked = button.clicked;
			$scope.button.a.clicked = false;
			$scope.button.b.clicked = false;

			button.clicked = !clicked;
			$scope.hide = !$scope.hide;
		}
	};
	
	$scope.button = {};
    $scope.button.a = {clicked: true}
	$scope.button.b = {clicked: false}
	$scope.button.c = {clicked: false}
	$scope.button.d = {clicked: false}
	
	$scope.select = function(button){
		var clicked = button.clicked;
		$scope.button.c.clicked = false;
		$scope.button.d.clicked = false;

		button.clicked = !clicked;
    };
	
});