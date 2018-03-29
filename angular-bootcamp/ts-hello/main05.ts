//When dealing with a custom type
//We need to explicitly create memory for it.
class Point {
    constructor(private _x?: number, private _y?: number) {
        // this.x = x; This is not required because typescript
        // this.y = y; Will create these for you.
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    get x() {
        return this.x;
    }

    set x(value) {
        if(value < 0){
            throw new Error('value cannot be less than 0.');
        }
        this.x = value;
    }

    get y() {
        return this.y;
    }

    set y(value) {
        if(value < 0){
            throw new Error('value cannot be less than 0.');
        }
        this.y = value;
    }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();