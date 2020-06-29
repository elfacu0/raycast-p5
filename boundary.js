class Boundary {
    constructor(x1, y1, x2, y2) {
        this.startPos = createVector(x1, y1);
        this.endPos = createVector(x2, y2);
    }
    draw() {
        stroke(255);
        line(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
    }
}
