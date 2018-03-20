var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];

app.get('/', function(req,res){
    res.render('home');
});

app.post("/addfriend", function(req, res){// 'post' is used to send data e.g. servers or back end.
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get('/friends',function(req,res){// 'get' is used to retrieve data.
    res.render('friends',{friends:friends});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been called!!!");
});