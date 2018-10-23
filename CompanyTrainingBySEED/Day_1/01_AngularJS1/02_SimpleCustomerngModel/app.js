var app=angular.module('transflower',[]);
app.controller('MainController', function($scope, $http){
  
  
  var onUserComplete=function(response){
    $scope.user=response.data;
  };
  
  
  $http.get("https://api.github.com/users/robconery")
      .then(onUserComplete);
     
     $scope.message= "Hello Transflower";
     $scope.username="angular";
     $scope.firstName="Ravi";
     $scope.lastName="Tambade";
     $scope.location="Pune";
     $scope.contactNumber="9881735801";
   
     
});