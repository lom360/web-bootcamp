// We are exporting this class to modules.ts
// The purpose is to just practice how to
// export class to other files.

export class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log("x: " + this._x + "\n" + "y: " + this._y);
    }
}