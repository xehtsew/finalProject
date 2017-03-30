var http = require("http");
var fs = require("fs");
var path =require("path");
//var Mongo_Wire = require("./Mongo_Wire.js");

var mimes = {
  ".html" : "text/html",
  ".css" : "text/css",
  ".js" : "text/javascript",
  ".gif" : "image/gif",
  ".jpg" : "image/jpeg",
  ".png" : "image/png"
}

var server = http.createServer((req, res) => {
  var filepath = (req.url === "/") ? ("./index.html") : ("." + req.url);
  var contentType = mimes[path.extname(filepath)];
  fs.exists(filepath, function (file_exists){
    if (file_exists){
      fs.readFile(filepath, function (error, content){
        if(error){
          res.writeHead(500);
          res.end();
        } else {
          res.writeHead(200, {"Content-Type": contentType});
          res.end(content, "utf-8");
        }
      })
    }else {
      res.writeHead(404);
      res.end("Error");
    }
  })
}).listen("1337", "127.0.0.1", function(){
//}).listen("1337", "192.168.1.66", function(){


    
  console.log("Server running");
});
