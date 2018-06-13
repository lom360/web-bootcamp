var p1 = document.getElementById("first");

var p2 = document.getElementsByClassName("special")[0];

var p3 = document.querySelector(".special");

var p4 = document.querySelector("#first");

var p5 = document.querySelectorAll(".special")[0];

var p6 = document.querySelector("body p.special");

var p7 = document.querySelector("body p#first");

var p8 = document.getElementsByTagName("p")[0];

var p9 = document.querySelector("h1 + p");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);
console.log(p7);
console.log(p8);
console.log(p9);