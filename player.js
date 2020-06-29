class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 20;
        this.rays = [];
        this.initRays();
    }
    draw() {
        stroke(0);
        fill(140);
        this.move();
        circle(this.x, this.y, this.r);
        for (let ray of this.rays) {
            ray.move(this.x, this.y);
            ray.draw();
        }
    }

    move() {
        this.x = mouseX;
        this.y = mouseY;
    }

    castRays(walls) {
        for (const ray of this.rays) {
            let min = Infinity;
            let closestWall = null;
            for (const wall of walls) {
                let rayPos = ray.cast(wall);
                if (rayPos) {
                    let rayLen = p5.Vector.dist(ray.pos, rayPos);
                    if (rayLen < min) {
                        min = rayLen;
                        closestWall = rayPos;
                    }
                }
            }

            if (closestWall) {
                line(this.x, this.y, closestWall.x, closestWall.y);
            } else {
                line(
                    this.x,
                    this.y,
                    this.x + ray.endPos.x * 1000,
                    this.y + ray.endPos.y * 1000
                );
            }
        }
    }

    initRays(rays = 360) {
        this.rays = [];
        let pos = createVector(0, 0);
        for (let i = 0; i <= 360; i += 360 / rays) {
            pos.x = Math.cos(Math.PI * (i / 180));
            pos.y = Math.sin(Math.PI * (i / 180));
            this.rays.push(new Ray(this.x, this.y, pos));
        }
    }
}
