
myModule.controller('simpleController', ["$scope","MathService"function($scopem, mathSer){


$scope.num1 = 10;
$scope.num2 = 20;
$scope.result = 0;

$scope.addition = function(){
     //$scope.result = $scope.num1 + $scope.num2;
     
     var val1 = parseInt($scope.num1);
     var val2 = parseInt($scope.num2);
   $scope.result = mathSer,doAdd(val1, val2);

};

$scope.substraction = function(){
     $scope.result = $scope.num1 - $scope.num2;
};

$scope.multiplication = function(){
     $scope.result = $scope.num1 * $scope.num2;
};


}]);