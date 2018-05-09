class Point {

    // An underscore is placed in front of the variable
    // of initialized variables so it will not conflict
    // with other variables in the class.
    constructor(private _x?:number, private _y?:number) {
    }

    draw() {
        console.log("x: " + this._x + "\n" + "y: " + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    // There is a difference in using the properties of "get" and "set"
    // versus the "methods" you can create like the examples below.
    // The main difference is with "methods" you would call it like other
    // "methods" from a class. Using the built in properties instead will
    // allow cleaner code, because you can call them like a "field".

    // getX() {
    //     return this.x;
    // }

    // setX(value) {
    //     this.x = value;
    // }
}

let point = new Point(1,2);

let x = point.x; // Calling the private variables using properties.
point.x = 10; // As we can see here we can call the variables as "fields".

// Below is example if we created our own "methods" to call private variables.
// let x = point.getX();
// point.setX(10);

point.draw();