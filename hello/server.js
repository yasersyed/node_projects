var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var jsonParser = bodyParser.json;
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res) {
  res.send('Hello from the server!'); // This will serve your request to '/'.
});

app.get('/todos', function(req, res, next) {
    res.send('kafka and mongoDB');
});

app.get('/test/:id/:name', function(req, res, next){
    var id = req.params.id;
    var name = req.params.name;
    res.send('id: ' + id + ' and name: ' + name);
});

app.post('/postTodos',urlencodedParser, function(req, res, next){
    var id = req.body.id;
    var name = req.body.name;
    console.log('got it: ' + id + ", name: " + name);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
 });