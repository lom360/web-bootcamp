$("h1").click(function(){
    alert("h1 clicked!");
});

$("button").click(function(){
    $(this).css("background-color", "pink");
    var text = $(this).text();
    console.log("You clicked " + text);
});

$("input").keypress(function(event){
    if(event.which === 13) {
        alert("YOU HIT ENTER!!!");
    }
});

$("h1").on("click", function() {
    $(this).css("color", "purple");
});

$("input").on("keypress", function(){
    console.log("Keypressed");
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function () {
    $(this).css("font-weight", "normal");
});