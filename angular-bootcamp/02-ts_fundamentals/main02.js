var a; // integers or floating point number
var b; // true or false
var c; // list of characters
var d; // any type
var e = [1, 2, 3]; // list of numbers
var f = [1, true, 'a', false]; // list of any type
var ColerRed = 0; // const means you cannot change
var ColorGreen = 1; // the value of the variable.
var ColorBlue = 2;
// enum sets the value of the variables in increments of +1.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
