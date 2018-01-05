// Key events
window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            ship.x -= 2;
            map.ctx.clearRect(0,0, map.width, map.height);
            map.drawStars();
            ship.move();
        break;
        case 38: // Up
            console.log("UP");
        break;
        case 39: // Right
            ship.x += 2;
            map.ctx.clearRect(0,0, map.width, map.height);
            map.drawStars();
            ship.move();
        break;
        case 40: // Bottom
            console.log("BOTTOM");
        break;
    }
};
