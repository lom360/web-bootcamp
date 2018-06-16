// All comments was my solution.
var btn = document.querySelector("button");
// var body = document.body.style;
// var toggled = false;


// btn.addEventListener("click", function(){
//     if(toggled) {
//         body.background = "white";
//     } else {
//         body.background = "purple";
//     }

//     toggled = !toggled;
// });




// Instructor's solution using classList.toggle
btn.addEventListener("click", function(){
    document.body.classList.toggle("purple");
})