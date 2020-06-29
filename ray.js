class Ray {
    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.endPos = createVector(r.x, r.y);
        this.collision = false;
    }
    draw() {
        stroke(255);
        push();
        translate(this.pos.x, this.pos.y);
        pop();
    }

    move(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    }

    cast(wall) {
        const x1 = this.pos.x;
        const y1 = this.pos.y;
        const x2 = x1 + this.endPos.x;
        const y2 = y1 + this.endPos.y;

        const x3 = wall.startPos.x;
        const y3 = wall.startPos.y;
        const x4 = wall.endPos.x;
        const y4 = wall.endPos.y;

        const t =
            ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) /
            ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
        const u = -(
            ((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) /
            ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
        );

        if (t >= 1 && t >= 0 && u >= 0 && u <= 1) {
            this.collision = true;
            let collisionPos = createVector(0, 0);
            collisionPos.x = x3 + u * (x4 - x3);
            collisionPos.y = y1 + t * (y2 - y1);
            return collisionPos;
        } else {
            this.collision = false;
        }
        return false;
    }
}
