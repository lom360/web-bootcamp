"use strict";
// We are exporting this class to modules.ts
// The purpose is to just practice how to
// export class to other files.
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("x: " + this._x + "\n" + "y: " + this._y);
    };
    return Point;
}());
exports.Point = Point;
