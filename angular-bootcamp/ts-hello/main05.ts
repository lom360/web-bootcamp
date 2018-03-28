//When dealing with a custom type
//We need to explicitly create memory for it.
class Point {
    constructor(private x?: number, private y?: number) {
        // this.x = x; This is not required because typescript
        // this.y = y; Will create these for you.
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

let point = new Point(1, 2);
point.draw();