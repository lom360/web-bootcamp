var btn = document.querySelector("button");
var body = document.body;
var toggle = false;


btn.addEventListener("click", function(){
    if(toggle) {
        body.style.background = "white";
    } else {
        body.style.background = "purple";
    }

    toggle = !toggle;
});