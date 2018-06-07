// Boolean Logic





// Logic Operation

// Example 3
var str = "";
var msg = "haha!";
var isFunny = "false";

console.log(!(( str || msg ) && isFunny));





//////////////////////////////
// Conditional

var age = 25;

if(age < 0) {
    console.log("error");
}else if(age < 18) {
    console.log("Sorry, you are not old enough to enter the venue.");
}else if (age == 21) {
    console.log("Happy 21st birthday!!!");
}else if(Math.sqrt(age)%1 == 0) {
    console.log("Your age is a perfect square");
}else if (age%2 != 0) {
    console.log("Your age is odd!");
}else if(age < 21) {
    console.log("You can enter, but cannot drink.");
}else {
    console.log("Come on in. You can drink.");
}