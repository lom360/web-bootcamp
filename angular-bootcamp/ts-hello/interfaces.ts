interface Point { // Interfaces are purely for declarations
    x: number,
    y: number
}

let drawPoint = (point:Point) => {
    //...
}

drawPoint({
    x: 1,
    y: 2
})