// We have 3 access modifiers: public, private and protected.
// public and private are the most common ones.
// By default all members are public.

class Point {
    //private x: number;
    //private y: number;

    // We can can initialized the access modifiers with
    // parameters of the constructors. Hence the reason why the
    // above declarations a commented out. Also the variables 
    // will automatically be set with the same varibles. Hence
    // the reason why the items in the constructor are commented out.
    constructor(private x?: number, private y?: number) {
        //this.x = x;
        //this.y = y;
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