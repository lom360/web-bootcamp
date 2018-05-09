// We have 3 access modifiers: public, private and protected.
// public and private are the most common ones.
// By default all members are public.
var Point = /** @class */ (function () {
    //private x: number;
    //private y: number;
    // We can can initialized the access modifiers with
    // parameters of the constructors. Hence the reason why the
    // above declarations a commented out. Also the variables 
    // will automatically be set with the same varibles. Hence
    // the reason why the items in the constructor are commented out.
    function Point(x, y) {
        this.x = x;
        this.y = y;
        //this.x = x;
        //this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("x: " + this.x + "\n" + "y: " + this.y);
    };
    Point.prototype.getDistance = function () {
        console.log("Hello world");
    };
    return Point;
}());
var point = new Point();
point.draw();
