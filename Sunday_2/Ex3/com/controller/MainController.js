
myModule.controller('MainController', ["$scope", "configurable",
	function($scope,configurable) 
{
		$scope.message = "default";
		
		$scope.displayMessage = function(){
         $scope.message = configurable.sayHello();    
		}

}]);