/*
 * CS290
 * Frank Thaden
 */
var http = require("http");
var connect = require('connect');
var fs = require('fs');

//var app = express();


function requestHandler(request, responce)
{
  if(request.method == 'GET' &&  request.url == '/style.css' )
  {
    responce.writeHead(200,{"Context-Type": "text/html"});
    fs.createReadStream("public/style.css").pipe(responce);
  }

  if (request.method == 'GET' && request.url == '/index.js')
  {
    responce.writeHead(200,{"Context-Type": "text/html"});
    fs.createReadStream("public/index.js").pipe(responce);
  }

  if(request.method == 'GET' && request.url == '/' || request.url == '/index.html' )
  {
    responce.writeHead(200,{"Context-Type": "text/html"});
    fs.createReadStream("public/index.html").pipe(responce);
  }
  else if (request.method == 'GET' && request.url == '/style.css')
  {
    responce.writeHead(200,{"Context-Type": "text/css"});
    fs.createReadStream("public/style.css").pipe(responce);

  }
  else if (request.method == 'GET' && request.url == '/index.js')
  {
    responce.writeHead(200,{"Context-Type": "text/js"});
    fs.createReadStream("public/index.js").pipe(responce);
  }
  else
  {
    responce.writeHead(200,{"Context-Type": "text/html"});
    fs.createReadStream("public/404.html").pipe(responce);
  }



}

http.createServer(requestHandler).listen(3000);
console.log("running.....................");
