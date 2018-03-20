var express = require('express');
var app = express();

app.set("view engine","ejs");

app.get('/',function(req,res){
    res.render("landing");
});

app.get('/campgrounds', function(req,res){
    var campgrounds = [
            {name: "Salmon Creek", image: "https://pixabay.com/get/e136b80728f31c22d2524518b7444795ea76e5d004b0144394f5c97aa0e8bc_340.jpg"},
            {name: "Granite Hill", image: "https://farm6.staticflickr.com/5723/21955780899_9c030cd802.jpg"},
            {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f1c471a4eab0b1_340.jpg"}
        ];
        
        res.render("campgrounds",{campgrounds:campgrounds});
})

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Yelp Camp At Your Service!!!");
});