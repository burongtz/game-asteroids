// Key events
window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            ship.x -= 2;
            map.ctx.clearRect(0,0, map.width, map.height);
            map.drawStars();
            ship.move();
            break;
        case 39: // Right
            ship.x += 2;
            map.ctx.clearRect(0,0, map.width, map.height);
            map.drawStars();
            ship.move();
            break;
    }
};

window.onkeypress = function(event) {
    switch (event.keyCode) {
        case 32: // Space
            var bullet = new Bullet(0, 0, ship.x, 126);
            arrayBullet.push(bullet);
            break;
    }
};
