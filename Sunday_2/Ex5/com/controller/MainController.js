
myModule.controller('MainController', ["$scope", "$filter",
	function($scope,$filter) 
{
		$scope.username = "default";
		$scope.updatedName = "";
		$scope.myDate = new Date();
		$scope.myObj = {
			name: 'ABCD',
			age:33
		}

		$scope.updateUserName = function()
		{
           $scope.updatedName = $filter('lowercase')($scope.username);
           $scope.mynumber = $filter('number')(334.5567,2);
		};

}]);