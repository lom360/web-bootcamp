var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req,res){
    res.render('home');
});

app.get('/friends',function(req,res){// 'get' is used to retrieve data.
    var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];
    res.render('friends',{friends:friends});
});

app.post("/addfriend", function(req, res){// 'post' is used to send data e.g. servers or back end.
    res.send("You have reached a post route!!!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been called!!!");
});