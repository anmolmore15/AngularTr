
myModule.controller('DummyController', ["$scope",'clientName',
	function($scope,clientName){

console.log('Dummy controller created');
//$scope.clientName = "dummy";

$scope.getClientName = function(){
     $scope.clientName = clientName;     
};

}]);