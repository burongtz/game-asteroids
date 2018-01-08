// Key events
var isLeftDown = false;
var isRightDown = false;
var isSpaceDown = false;
window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            isLeftDown = true;
            if (isSpaceDown) {
                shootBullet();
            } else {
                moveLeft();
            }
            break;
        case 39: // Right
            isRightDown = true;
            if (isSpaceDown) {
                shootBullet();
            } else {
                moveRight();
            }
            break;
    }
};
window.onkeyup = function(event) {
    switch (event.keyCode) {
        case 32: // Space
            isSpaceDown = false;
            break;
        case 37: // Left
            isLeftDown = false;
            break;
        case 39: // Right
            isRightDown = false;
            break;
    }
};

window.onkeypress = function(event) {
    switch (event.keyCode) {
        case 32: // Space
            isSpaceDown = true;
            shootBullet();
            break;
    }
};

function shootBullet() {
    if (isLeftDown) {
        moveLeft();
    }
    if (isRightDown) {
        moveRight();
    }
    arrayBullet.push(new Bullet(0, 0, ship.x, 119));
}

function moveLeft() {
    ship.x -= ship.speed;
    ship.move();
    map.drawAll(window.asteroids, window.ship, arrayBullet);
}

function moveRight() {
    ship.x += ship.speed;
    ship.move();
    map.drawAll(window.asteroids, window.ship, arrayBullet);
}
