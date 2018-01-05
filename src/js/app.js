import Map from './map';
import Sprite from './Sprite';
import Ship from './Ship';
import Asteroid from './Asteroid';

require('./events');

window.onload = function() {
    var sprite = new Sprite("img/game.png");
    var asteroid = new Asteroid(1, 100, 0, 0);

    window.map = new Map();
    window.ship = new Ship(map, sprite);
    sprite.image.onload = function() {
        var asteroidFace = {
            x: 0,
            y: 0,
            frames: 10
        };

        setInterval(function() {
            map.ctx.clearRect(0, 0, map.width, map.height);
            map.drawStars();
            asteroidFace.x += asteroid.spriteW;
            map.ctx.drawImage(sprite.image, asteroidFace.x, asteroidFace.y, asteroid.spriteW, asteroid.spriteH, asteroid.x,
                asteroid.y, 20, 20);
            ship.move();
        }, 80);
    };
};
