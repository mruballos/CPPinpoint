angular.module('pinpoint.campaigndetail', ['pinpoint.service.auth'])
.controller('CampaignDetailCtrl', function($scope) {
    
$scope.show = true;

$scope.custom = true;
$scope.toggleCustom = function() {
$scope.custom = $scope.custom === false ? true: false;
};
    
$scope.button = {};
$scope.button.a = {clicked: false}
$scope.button.b = {clicked: false}
   
  $scope.select = function(button){
    var clicked = button.clicked;
    $scope.button.a.clicked = false;
    $scope.button.b.clicked = false;
 
    button.clicked = !clicked;
  }; 
    
/*    Failure
$scope.button = {};
$scope.button.c = {clicked: false}
$scope.button.d = {clicked: false}
   
  $scope.select = function(button){
    var clicked = button.clicked;
    $scope.button.c.clicked = false;
    $scope.button.d.clicked = false;
 
    buttons.clicked = !clicked;
  }; 
	*/
});