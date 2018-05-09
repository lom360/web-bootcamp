"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponents = /** @class */ (function () {
    function LikeComponents(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeComponents.prototype.onClick = function () {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // }else{
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
        // The statment below is uses a "conditional operator".
        // If you are going to have only an "if and else" and
        // no "else if", then this can be much cleaner.
        this._likesCount += (this._isSelected) ? -1 : 1;
        // The code below represents a way
        // to toggle the value of "isSelected".
        // Instead of using the two statement
        // in the if-else statement to toggle.
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponents.prototype, "likesCount", {
        // The properties below allow us to access the fields.
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponents.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponents;
}());
exports.LikeComponents = LikeComponents;
