myModule.service('CalcService', function(){
	console.log('Calc Service created.');
        this.doSquare = function(val){
            return val * val;
        };

        this.doCube = function(val){
                 return val * val * val;
        };
});