myModule.factory('MathService',['CalcService', function(calcSer){
      
      console.log('Math Service created.');
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

      mathObj.doubleVal = function(num1){
        return calcSer.doSquare(num1);
      }

      mathObj.cubeVal = function(num1){
        return calcSer.doCube(num1);
      }

      return mathObj;
}]);