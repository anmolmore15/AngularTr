
myModule.controller('simpleController', ["$scope","MathService","calcService", function($scope, mathSer,calcService){

console.log('controller created')

$scope.num1 = 10;
$scope.num2 = 20;
$scope.result = 0;
$scope.clientName = "";
calcService.setClientName('Sourcecode');

$scope.addition = function(){
     var val1 = parseInt($scope.num1);
     var val2 = parseInt($scope.num2);
   $scope.result = mathSer.doAdd(val1, val2);
   $scope.clientName = calcService.getClientName();
};

$scope.substraction = function(){
        var val1 = parseInt($scope.num1);
     var val2 = parseInt($scope.num2);
   $scope.result = mathSer.doSub(val1, val2);
};

$scope.multiplication = function(){
     var val1 = parseInt($scope.num1);
     var val2 = parseInt($scope.num2);
   $scope.result = mathSer.doMul(val1, val2);
};

$scope.square = function(){
     var val1 = parseInt($scope.num1);
   $scope.result = mathSer.doubleVal(val1);
};

$scope.cube = function(){
     var val1 = parseInt($scope.num1);
     
   $scope.result = mathSer.cubeVal(val1);
};

}]);