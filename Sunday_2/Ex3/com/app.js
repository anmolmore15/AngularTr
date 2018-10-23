var myModule = angular.module('myApp',[]);

myModule.config(['configurableProvider',function(configurableProvider){
	   configurableProvider.setName("Harry");
	}]);
