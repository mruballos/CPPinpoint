angular.module('pinpoint.campaignmessage', ['pinpoint.service.auth'])
.controller('CampaignMessageCtrl', function($scope) {
	
    $scope.button = {};
    $scope.button.a = {clicked: true}
    $scope.button.b = {clicked: false}
   
  $scope.select = function(button){
    var clicked = button.clicked;
    $scope.button.a.clicked = false;
    $scope.button.b.clicked = false;
 
    button.clicked = !clicked;
  }; 
    
});