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
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema); // Converting the schema into a piece of code where we'll be able to use methods.

Campground.create({
    name: "Granite Hill", 
    image: "https://farm6.staticflickr.com/5723/21955780899_9c030cd802.jpg",
    description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
}, function(err, campground){
    if(err){
        console.log(err);
    }else{
        console.log("Newly Created Campground");
        console.log(campground);
    }
});


app.get('/',function(req,res){
    res.render("landing");
});

//INDEX - show all campgrounds
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

//CREATE - add new campground to DB
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

//NEW - show form to create new campground
app.get("/campgrounds/new",function(req,res){
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    // render show template with that campground
    res.send("THIS WILL BE THE SHOW PAGE ONE DAY");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Yelp Camp At Your Service!!!");
});



/*
 * name        url           verb      description
 *===============================================================
 * INDEX      /dogs          GET      Display a list of all dog
 * NEW        /dogs/new      GET      Display a form to make a new dog
 * CREATE     /dogs          POST     Add new dog to DB
 * SHOW       /dogs/:id      GET      Shows info about one dog
 */