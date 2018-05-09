var Point = /** @class */ (function () {
    // Other languages like C# can have multiple constructors.
    // Typescript cannot however, so the solution is to make
    // parameters of constructors optional by adding '?'.
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("x: " + this.x + "\n" + "y: " + this.y);
    };
    Point.prototype.getDistance = function () {
        console.log("Something");
    };
    return Point;
}());
var point = new Point();
point.draw();
