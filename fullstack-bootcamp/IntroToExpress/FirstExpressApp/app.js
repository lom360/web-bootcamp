var express = require("express");
var app = express();

// Order of routes matter. The first route that matches
// will be the only route that runs. So if the below route
// runs first, then the other routes afterwards will not run.
// app.get("*", function(req,res){
//     res.send("You are a star");
// });

// "/" => "Hi there"!
app.get("/", function(req,res){
    res.send("Hi there!!!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
   res.send("Goodbye!!!"); 
});
// "/dog" +> "MEOW!"
app.get("/dog", function(req,res){
    console.log("SOMEONE MADE A REQUEST TO /DOG");
    res.send("MEOW!!!"); 
});

app.get("/r/:subredditName", function(req,res){
    console.log(req.params);
    res.send("Welcome to a subreddit!!!");
});

app.get("/r/:subreddit/comments/:id/:title",function(req,res){
    var subreddit = req.params.subreddit
    //The ':' tells express to not match name for name but patterns instead.
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit!"); 
});

app.get("*", function(req,res){
    res.send("You are a star");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});