//get packages and frameworks
var express = require("express");
var app = express();
var router = express.Router();

// "/" => "index.html"
app.get("/", function(req, res){
	//var thing = req.params.thing;
	res.render("index.ejs");
});


// "/login" ==> "login.html"
app.get("/login", function(req, res){
	res.send("login!");
})






app.get("*", function(req, res){
	res.send("The page you requested isn't available.");
});

app.listen(3000, function(){
	console.log("Started serving.");
});