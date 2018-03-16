var express = require("express");
var app = express();

app.get('/',function(req,res){
    console.log("SERVER HAS BEEN CALLED!!!");
    res.send("Hi there, welcome to my assignement!");
});

app.get('/speak/:animal',function(req,res){
    var animal = req.params.animal;
    var sound = "";
    
    if(animal == 'pig'){
        sound = 'oink';
    }else if(animal == 'cow') {
        sound = 'moo';
    }else if(animal == 'dog'){
        sound = 'woof';
    }
    
    res.send("The " + animal + " says " + sound + "!!!");
});

app.get("/repeat/:word/:num",function(req,res){
    var numPrint = Number(req.params.num);
    var newWord = req.params.word;
    for(var i = 1; i < numPrint; i++) {
       newWord = newWord + " " + req.params.word;
    }
    res.send(newWord);
});

app.get('*', function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});