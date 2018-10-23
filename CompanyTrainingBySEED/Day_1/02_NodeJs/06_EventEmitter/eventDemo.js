// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Bind the connection event with the handler
eventEmitter.on('connection', onConnect);
 
// Bind the data_received event with the handler
eventEmitter.on('data_received', onDataReceived);

// Create an event handler as follows
var onConnect = function connected() {
   console.log('connection succesful.');
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Create an event handler as follows
var onDataReceived = function connected() {
  console.log('data received succesfully.'); 
}






// Fire the connection event 
eventEmitter.emit('connection');
console.log("Program Ended.");