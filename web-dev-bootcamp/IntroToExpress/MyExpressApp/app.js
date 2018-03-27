var express = require("express");
var app = express();

app.get('/',function(req,res){
    console.log("SERVER HAS BEEN CALLED!!!");
    res.send("Hi there, welcome to my assignement!");
});

app.get('/speak/:animal',function(req,res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof",
        cat: "I hate you hooman",
        fish: "Wapapapapapaapow"
    }
    
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal + " says '" + sound + "'!!!");
});

app.get("/repeat/:message/:times",function(req,res){
    var times = Number(req.params.times);
    var message = req.params.message;
    var result = message;
    
    for(var i = 1; i < times; i++) {
       result += " " + message;
    }
    
    res.send(result);
});

app.get('*', function(req,res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});