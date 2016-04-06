//get packages and frameworks
var express = require("express");
var app = express();

// "/" => "index.html"
app.get("/", function(req, res){
	res.send("Hi");
});

// "/login" ==> "login.html"
app.get("/login", function(req, res){
	res.send("login!");
})



app.listen(3000, function(){
	console.log("Started serving.");
});