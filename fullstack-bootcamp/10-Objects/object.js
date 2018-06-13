var movies = [
    {
        haveWatched: true,
        name: "In Bruges",
        ratings: 5
    },
    {
        haveWatched: false,
        name: "Frozen",
        ratings: 4.5
    },
    {
        haveWatched: true,
        name: "Mad Max Fury Road",
        ratings: 5
    },
    {
        haveWatched: false,
        name: "Les Miserables",
        ratings: 3.5
    }
]

for(var i = 0; i < movies.length; i++) {
    if(movies[i].haveWatched == true) {
        console.log("You have watched " + '"' + movies[i].name + '"' + " - " + String(movies[i].ratings) + "stars");
    } else {
        console.log("You have not seen " + '"' + movies[i].name + '"' + " - " + String(movies[i].ratings) + "stars");
    }
}