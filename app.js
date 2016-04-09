//get packages and frameworks
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
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


//req.body holds all the form info in the request
app.post("/newuser", function(req, res){
	var newUser = req.body;
	res.send("You've added a new user: " + newUser);
	res.redirect("/friends");

});





app.get("*", function(req, res){
	res.send("The page you requested isn't available.");
});

app.listen(3000, function(){
	console.log("Started serving.");
});