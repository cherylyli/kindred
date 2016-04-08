//get packages and frameworks
var express = require("express");
var app = express();
var router = express.Router();


app.use(express.static("public"));
app.set("view engine", "ejs");

// "/" => "index.html"
app.get("/", function(req, res){
	//var thing = req.params.thing;
	res.render("index");
});


// "/login" ==> "login.html"
app.get("/signup", function(req, res){
	res.render("signup");
})






app.get("*", function(req, res){
	res.send("The page you requested isn't available.");
});

app.listen(3000, function(){
	console.log("Started serving.");
});