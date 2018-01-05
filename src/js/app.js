import Map from './map';
import Event from './events';
import Sprite from './Sprite';
import Asteroid from './Asteroid';

window.onload = function() {
    var sprite = new Sprite("img/game.png");
    var map = new Map();
    var asteroid = new Asteroid(5, 100, 0, 0);

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
            map.ctx.drawImage(sprite.image, asteroidFace.x, asteroidFace.y, 36, 55, asteroid.x,
                asteroid.y, 20, 20);
        }, 80);
    };
};
