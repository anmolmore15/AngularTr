myModule.service('CalcService',['$window',function($window){
	console.log('Calc Service created.');
 
     this.setClientName = function(value){
     	$window.localStorage.setItem('clientName', value);
     }


     this.getClientName = function(value){
     	 return $window.localStorage.getItem('clientName', value);
     }

        this.doSquare = function(val){
            return val * val;
        };

        this.doCube = function(val){
                 return val * val * val;
        };
}]);