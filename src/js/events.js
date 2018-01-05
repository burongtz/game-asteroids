// Key events
window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            ship.x -= 2;
            map.drawAll(window.asteroids);
            ship.move();
        break;
        case 38: // Up
            console.log("UP");
        break;
        case 39: // Right
            ship.x += 2;
            map.drawAll(window.asteroids);
            ship.move();
        break;
        case 40: // Bottom
            console.log("BOTTOM");
        break;
    }
};
