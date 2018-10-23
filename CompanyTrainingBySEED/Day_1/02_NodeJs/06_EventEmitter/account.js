// Import events module
var events = require('events');
var eventEmitter = new events.EventEmitter();

var account=function() {
    var balance= 5000;
    var  deposit=function(amount){
         balance+=amount;
         monitor();
    };
    var withdraw=function(amount){
        balance-=amount;
        monitor();
    };
    var monitor=function(){
       if(balance <5000)
       {
           eventEmitter.emit('underBalance');

       }
       else if( balance> 25000){
            eventEmitter.emit('overBalance');
       };
   };
    var RegisterEventhandlers= function(){
        // Bind the  with the handler
         eventEmitter.on('underBalance', blockAccount);
         eventEmitter.on('overBalance', payIncomeTax);
    };

    var payIncomeTax = function connected() {
         console.log('15% Income Tax has been deducted as TDS from your Account by Order !');
    }
  
    var blockAccount = function connected() {
        console.log('Your account has been blocked temperorilly.'); 
    }
   return{
       deposit:deposit,
       withdraw:withdraw,
       RegisterEventhandlers:RegisterEventhandlers
   }
};

var acct123= new account ();
acct123.RegisterEventhandlers();
acct123.deposit(15000);
console.log("Program Ended.");