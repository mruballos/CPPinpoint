angular.module('pinpoint.silentnotification', ['pinpoint.service.auth'])
.controller('SilentNotificationCtrl', function($scope) {
    
      $scope.button = {};
    $scope.button.a = {clicked: false}
    $scope.button.b = {clicked: true}
   
  $scope.select = function(button){
    var clicked = button.clicked;
    $scope.button.a.clicked = false;
    $scope.button.b.clicked = false;
 
    button.clicked = !clicked;
  }; 
	
});