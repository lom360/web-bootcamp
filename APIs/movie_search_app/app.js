//omdbapi.com
//api key: &apikey=thewdb

var express = require('express');
var app = express();
var request = require('request');

app.set("view engine","ejs");

app.get("/results", function(req,res){
    request("http://omdbapi.com/?s=new%20york&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results",{data:data});
        }
    });
});


app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Movie app has been called.");
});