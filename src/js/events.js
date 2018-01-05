// Key events
window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            ship.x -= ship.speed;
            ship.move();
            map.drawAll(window.asteroids, window.ship);
        break;
        case 38: // Up
            console.log("UP");
        break;
        case 39: // Right
            ship.x += ship.speed;
            ship.move();
            map.drawAll(window.asteroids, window.ship);
        break;
        case 40: // Bottom
            console.log("BOTTOM");
        break;
    }
};
