var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function () {
        console.log("something");
    };
    return Point;
}());
var point = new Point(); // We are creating an object on this line.
point.x = 1; // An object is an instance of a class.
point.y = 2;
point.draw();
