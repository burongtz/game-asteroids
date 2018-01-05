import Map from './map';
import Event from './events';
import Sprite from './Sprite';
import Ship from './Ship';
import Asteroid from './Asteroid';

window.onload = function() {
    var sprite = new Sprite("img/game.png");
    var map = new Map();
    var asteroid = new Asteroid(1, 100, 0, 0);
    window.ship = new Ship(map, sprite);
    sprite.image.onload = function() {
        //map.ctx.drawImage(sprite.image, 0, 0);

        setInterval(function() {
            map.ctx.clearRect(0,0, map.width, map.height);
            map.drawStars();
            map.ctx.drawImage(sprite.image, 0, 0, 55, 55, asteroid.x, ++asteroid.y, 20, 20);
            ship.move();
        }, 80);
    };
};
