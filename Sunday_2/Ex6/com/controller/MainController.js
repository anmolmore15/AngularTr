
myModule.controller('MainController', ["$scope", "$filter",
	function($scope,$filter) 
{
		$scope.userNames = ['Ajay','Vijay','Sahil','Shailesh'];
		
		$scope.myDataObj = [
								{
									name: "Pavan", 
									age:33
								},
								{
									name: "Shiv",
									age: 44
								},
						        {
						        	name: "abhi",
						        	age:22
						        }
						];

}]);