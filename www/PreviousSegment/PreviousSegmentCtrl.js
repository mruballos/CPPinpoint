angular.module('pinpoint.previoussegment', ['pinpoint.service.auth'])
.controller('PreviousSegmentCtrl', function($scope) {
    
        
    $scope.button = {};
    $scope.button.a = {clicked: true}
    
    $scope.select = function(button){
    var clicked = button.clicked;
    $scope.button.a.clicked = true;

 
    button.clicked = !clicked;
  }; 
	
});