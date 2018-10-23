myModule.provider('configurable', function(){
	
    var nameInput = "";
    
    this.setName = function(name){
    	nameInput = name;
    };

    this.$get = function(){
    	 var myObj = {};
    	 myObj.sayHello = function(){
    	 	return "Hello," + nameInput + "!";
    	 }

    	 return myObj;
    };

});