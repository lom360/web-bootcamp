var movies = [
    {
        haveWatched: true,
        title: "In Bruges",
        ratings: 5
    },
    {
        haveWatched: false,
        title: "Frozen",
        ratings: 4.5
    },
    {
        haveWatched: true,
        title: "Mad Max Fury Road",
        ratings: 5
    },
    {
        haveWatched: false,
        title: "Les Miserables",
        ratings: 3.5
    }
]

// MY SOLUTION
// for(var i = 0; i < movies.length; i++) {
//     if(movies[i].haveWatched == true) {
//         console.log("You have watched " + '"' + movies[i].title + '"' + " - " + String(movies[i].ratings) + "stars");
//     } else {
//         console.log("You have not seen " + '"' + movies[i].title + '"' + " - " + String(movies[i].ratings) + "stars");
//     }
// }


// INSTRUCTOR'S SOLUTION
movies.forEach(function(movie){
    console.log(buildString(movie));
    
});

function buildString(movie){
    var result = "You have";
    if(movie.haveWatched) {
        result += " watched ";
    } else {
        result += " not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.ratings + " stars";
    return result;
}