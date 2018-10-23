var fs = require("fs");

 fs.writeFile('product.txt', 'Apple iPhone 6 , latest model of Apple Smart Phone!',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("product.txt is written with data!");
   console.log("Now reading data from product.txt");
   fs.readFile('product.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});


console.log("Getting details of product.txt file!");


fs.stat('product.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});