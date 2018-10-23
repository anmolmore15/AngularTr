myModule.factory('MathService',function(){
      
      console.log('Service created.')
      var mathObj = {};

      mathObj.doAdd = function(num1 ,num2){
              return num1 + num2;
      };

      mathObj.doSub = function(num1 ,num2){
              return num1 - num2;
      };

      mathObj.doMul = function(num1 ,num2){
             return num1 * num2;
      };

      return mathObj;
});