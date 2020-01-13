//  main.js

// var fs = require("fs");
//
// fs.readFile('./hello.txt', encoding = 'utf-8', function(err, data) {
//     if (err) {
//         throw err;
//     }
//     console.log(data + " Node.js!");
// });

// main.js

var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("helloNode", function(str) {
    console.log("Hello! " + str );
});

setTimeout(function() {
    evt.emit("helloNode", "Node.js");
}, 3000);