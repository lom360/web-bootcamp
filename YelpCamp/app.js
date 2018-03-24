var express    = require('express');
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

var Campground = mongoose.model("Campground", campgroundSchema); // Converting the schema into a piece of code where we'll be able to use methods.

// Campground.create({
//     name: "Granite Hill", 
//     image: "https://farm6.staticflickr.com/5723/21955780899_9c030cd802.jpg"
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Newly Created Campground");
//         console.log(campground);
//     }
// });


app.get('/',function(req,res){
    res.render("landing");
});

app.get('/campgrounds', function(req,res){
        // Get all campgrounds from DB
        Campground.find({}, function(err,allCampgrounds){
            if(err){
                console.log(err);
            }else{
                res.render("campgrounds",{campgrounds:allCampgrounds});
            }
        })
        // res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get dat from form and add to campgrounds array.
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campground");
        }
    })
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Yelp Camp At Your Service!!!");
});