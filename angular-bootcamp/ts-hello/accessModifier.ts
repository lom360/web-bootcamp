// We have 3 access modifiers: public, private and protected.
// public and private are the most common ones.
// By default all members are public.

class Point {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("x: " + this.x +"\n" + "y: " + this.y);
    }

    getDistance(){
        console.log("Hello world");
    }
}

let point = new Point();
point.draw();