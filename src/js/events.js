// Key events
var isLeftDown = false;
var isRightDown = false;
window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            isLeftDown = true;
            moveLeft();
            break;
        case 38: // Up
            console.log("UP");
        break;
        case 39: // Right
            isRightDown = true;
            moveRight();
            break;
    }
};
window.onkeyup = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            isLeftDown = false;
            break;
        case 38: // Up
            console.log("UP");
        break;
        case 39: // Right
            isRightDown = false;
            break;
    }
};

window.onkeypress = function(event) {
    switch (event.keyCode) {
        case 32: // Space
            if (isLeftDown) {
                moveLeft();
            }

            if (isRightDown) {
                moveRight();
            }
            console.log(isRightDown + " " + isLeftDown);
            arrayBullet.push(new Bullet(0, 0, ship.x, 119));
            break;
    }
};

function moveLeft() {
    ship.x -= ship.speed;
    ship.move();
    map.drawAll(window.asteroids, window.ship);
}

function moveRight() {
    ship.x += ship.speed;
    ship.move();
    map.drawAll(window.asteroids, window.ship);
}
