var Point = /** @class */ (function () {
    // An underscore is placed in front of the variable
    // of initialized variables so it will not conflict
    // with other variables in the class.
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("x: " + this._x + "\n" + "y: " + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.x; // Calling the private variables using properties.
point.x = 10; // As we can see here we can call the variables as "fields".
// Below is example if we created our own "methods" to call private variables.
// let x = point.getX();
// point.setX(10);
point.draw();
