angular.module('pinpoint.campaignschedule', ['pinpoint.service.auth'])
.controller('CampaignScheduleCtrl', function($scope) {
	
    
    $scope.button = {};
$scope.button.a = {clicked: false}
$scope.button.b = {clicked: false}
$scope.button.c = {clicked: false}
$scope.button.d = {clicked: false}
$scope.button.e = {clicked: false}
$scope.button.f = {clicked: false}
   
  $scope.select = function(button){
    var clicked = button.clicked;
    $scope.button.a.clicked = false;
    $scope.button.b.clicked = false;
    $scope.button.c.clicked = false;
    $scope.button.d.clicked = false;
    $scope.button.e.clicked = false;
    $scope.button.f.clicked = false;
 
    button.clicked = !clicked;
  }; 
});