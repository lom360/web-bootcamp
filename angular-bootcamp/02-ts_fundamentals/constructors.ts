class Point {
    x: number;
    y: number;

    // Other languages like C# can have multiple constructors.
    // Typescript cannot however, so the solution is to make
    // parameters of constructors optional by adding '?'.
    constructor(x?:number, y?:number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("x: " + this.x + "\n" + "y: " + this.y);
    }

    getDistance() {
        console.log("Something");
    }
}

let point = new Point();
point.draw();