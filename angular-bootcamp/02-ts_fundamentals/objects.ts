class Point {
    x: number;
    y: number;

    draw():void {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance():void {
        console.log("something");
    }
}

let point = new Point();// We are creating an object on this line.
point.x = 1;            // An object is an instance of a class.
point.y = 2;
point.draw();