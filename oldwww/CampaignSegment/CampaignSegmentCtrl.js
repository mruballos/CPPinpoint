angular.module('pinpoint.campaignsegment', ['pinpoint.service.auth'])
.controller('CampaignSegmentCtrl', function($scope) {
	
    
    $scope.button = {};
    $scope.button.a = {clicked: true}
    
    $scope.select = function(button){
    var clicked = button.clicked;
    $scope.button.a.clicked = true;

 
    button.clicked = !clicked;
  }; 
	
});