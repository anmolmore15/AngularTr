
myModule.controller('MainController', ["$scope",'clientId',
	function($scope, clientId){

console.log('Main controller created');


$scope.getClientId = function(){
    $scope.clientId = clientId;  
    //console.log(clientId);    
};

}]);