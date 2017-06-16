var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var postData = require('./posts');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.get('/$', function (req, res, next) {

  var templateArgs = {
    post: postData,
  };
  res.render('index', templateArgs);
});

app.post('/posts/addListing', function (req, res, next) {
  var posts = postData
  var posting = {
    text: req.body.text,
    amount: req.body.amount,
    imgUrl: req.body.imgUrl,
    listTag: req.body.listTag,
    faTag: req.body.faTag
  };

  posts.push(posting);
  fs.writeFile('posts.json', JSON.stringify(postData), function (err) {
    if (err) {
      res.status(500).send("Unable to save listing to \"database\".");
    } else {
      res.status(200).send();
    }
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
// Start the server listening on the specified port.
app.listen(port, function () {
  console.log("== Server listening on port", port);
});

/*
 * CS290
 * Frank Thaden
 */
/*
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
*/
/*
var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var port = process.env.PORT || 3000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB;
var mongoURL = 'mongodb://' + mongoUser + ':' + mongoPassword +
  '@' + mongoHost + ':' + mongoPort + '/' + mongoDBName;
var mongoDB;

console.log('== MongoDB URL:', mongoURL);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());


// Start the server listening on the specified port.
MongoClient.connect(mongoURL, function (err, db) {
  if (err) {
    throw err;
  }
  mongoDB = db;
  app.listen(port, function () {
    console.log("== Server listening on port", port);
  });
});
*/
