let a: number; // integers or floating point number
let b: boolean; // true or false
let c: string; // list of characters
let d: any; // any type
let e: number[] = [1, 2, 3]; // list of numbers
let f: any[] = [1, true, 'a', false]; // list of any type

const ColerRed = 0; // const means you cannot change
const ColorGreen = 1; // the value of the variable.
const ColorBlue = 2;

// enum sets the value of the variables in increments of +1.
enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;