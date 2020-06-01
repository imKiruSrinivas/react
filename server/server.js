var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "user4",
      "password" : "password4",
      "id": 4
   }
}

app.get('/', function (req, res) {
    fs.readFile( __dirname + "/database/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/database/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 

 
app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/database/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

app.delete('/deleteUser', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/database/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 

 
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/database/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
 

 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("App is listening at http://%s:%s", host, port)
})
