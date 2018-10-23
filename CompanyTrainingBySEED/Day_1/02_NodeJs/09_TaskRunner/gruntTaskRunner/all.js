var app = angular.module('transflower');
var productAddController = function ($scope, producthub, $routeParams) {
    $scope.productname = $routeParams.productname;
    $scope.add = function () {
        
        producthub.create($scope.product);
        
    };
};

productAddController.$inject = ["$scope", "producthub", "$routeParams"];
app.controller("ProductAddController", productAddController);
var app = angular.module('transflower');

var productDeleteController = function ($scope, producthub, $routeParams,$location) {
    $scope.productid = $routeParams.productid; 

   var onError = function (reason) {
        $scope.error;
        console.log($scope.error);
    };  

   var onProductRemoveComplete = function (response) {
         console.log("Redirecting to index");
         $scope.$apply();
         //$location.path("/productIndex");  
    };
    producthub.remove($scope.productid).then(onProductRemoveComplete,onError); 
};

productDeleteController.$inject = ["$scope", "producthub", "$routeParams", "$location"];
app.controller("ProductDeleteController", productDeleteController);
var app = angular.module('transflower');
var productDetailController = function ($scope,shoppingCarthub, producthub, $routeParams) {
    console.log('Inside Product Detail COntroller..');
    var item={ productId:100,  Title:"Apple", UnitPrice:200,  quantity:1};
   
    var onProductGetComplete = function (response) {
         $scope.product=response[0];
        console.log('Selected Product Details' + $scope.product.Title);
    };

    var onError = function (reason) {   $scope.error; };
    $scope.productid = $routeParams.productid;
     
    producthub.get($scope.productid).then(onProductGetComplete,onError);




    $scope.addToCart = function (product) {
            item.productId=product.ProductId;
            item.Title=product.Title;
            item.UnitPrice=product.UnitPrice;
            item.quantity=1;
        shoppingCarthub.add(item).then(onCartComplete,onCartError);          
};





};
productDetailController.$inject = ["$scope", "shoppingCarthub", "producthub", "$routeParams"];
app.controller("ProductDetailController", productDetailController);
var app = angular.module('transflower');
var productIndexController = function ($scope, $interval, $location, shoppingCarthub,producthub) {
console.log('Index Controller Loaded..');
  var item={
      productId:100,
      Title:"Apple",
      UnitPrice:200,
      quantity:1
  };
  
    var onProductComplete = function (response) {
    $scope.products=response;
    };

    var onError = function (reason) {
        $scope.error;
    };

   var onGet = function (response) {
   $scope.allItems=response;
    };

    var onErr = function (reason) {
        $scope.error;
    };

    var onCartComplete = function (response) {
         
    shoppingCarthub.getAll().then(onGet,onErr);
    };

    var onCartError = function (reason) {
        $scope.error;
    };

    producthub.getAll().then(onProductComplete,onError);
      
     $scope.addToCart = function (product) {
         item.productId=product.ProductId;
         item.Title=product.Title;
         item.UnitPrice=product.UnitPrice;
        item.quantity=1;
       shoppingCarthub.add(item).then(onCartComplete,onCartError);
               
    };

    };
    productIndexController.$inject = ["$scope", "$interval", "$location", "shoppingCarthub", "producthub"];

app.controller("ProductIndexController", productIndexController);


// var app = angular.module('transflower');
// var productSearchController = function ($scope, producthub, $location) {

// }
// app.controller("ProductSearchController", productSearchController);


var productSearchController=function ($scope, $filter)
{
    $scope.items = [
        {id:1, name:'John'},
        {id:2, name:'Steve'},
        {id:3, name:'Joey'},
        {id:4, name:'Mary'},
        {id:5, name:'Marylin'}];
    
    $scope.items2 = $scope.items;
    
    $scope.$watch('search', function(val)
    { 
        $scope.items = $filter('filter')($scope.items2, val);
    });
};
productSearchController.$inject = ["$scope", "$filter"];
app.controller("ProductSearchController", productSearchController);
var app = angular.module('transflower');
var productUpdateController = function ($scope, producthub, $routeParams) {
    
     var onProductGetComplete = function (response) {
       console.log("Update To Be Updated...");
       console.log(response);
        $scope.product=response[0];
        
    };

    var onError = function (reason) {
        $scope.error;
    };
    
    
    
    $scope.productid = $routeParams.productid;
     producthub.get($scope.productid).then(onProductGetComplete,onError);
 
    $scope.update = function (product) {
 
        producthub.update(product);
        console.log(product);
    };
};
productUpdateController.$inject = ["$scope", "producthub", "$routeParams"];
app.controller("ProductUpdateController", productUpdateController);