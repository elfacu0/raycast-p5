let player;
let walls = [];

function setup() {
    createCanvas(800, 500);
    player = new Player(300, 300);
    walls.push(new Boundary(500, 100, 800, 450));
    walls.push(new Boundary(200, 0, 300, 150));
}

function draw() {
    background('#0b0b0b');
    walls.forEach((wall) => wall.draw());
    player.draw();
    player.castRays(walls);

    if (mouseIsPressed === true) {
        walls.push(new Boundary(mouseX, mouseY, pmouseX, pmouseY));
    }
}

function changeRaysNumber(number) {
    player.initRays(number);
}
