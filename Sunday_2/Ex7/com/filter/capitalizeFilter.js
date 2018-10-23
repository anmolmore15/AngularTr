myModule.filter('capitalize',function(){
  return function(inputName)
  {
       var myStr = '';

       if(inputName != '')
       {
       	   myStr = inputName[0].toUpperCase() + inputName.slice(1); 
       }       

       return myStr;
  }
});