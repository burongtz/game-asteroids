import Map from './map';
import Sprite from './Sprite';
import Ship from './Ship';
import Asteroid from './Asteroid';
import Helper from './helper';

require('./events');

window.onload = function() {
    var sprite = new Sprite("img/game.png");
    
    window.asteroids = [];
    window.map = new Map(sprite.image);
    window.ship = new Ship(map, sprite);
    
    // Create asteroids
    for (var i = 0, size = Helper.getRandom(1, Helper.ASTEROID_LIMIT); i < size; i++) {
        window.asteroids.push(
            new Asteroid(Helper.getRandom(1, 3), 100, Helper.getRandom(0 , map.width - 20), -15)
        );
    }

    sprite.image.onload = function() {
        setInterval(function() {
            // Change asteroids position
            window.asteroids.forEach(function(asteroid) {
                asteroid.y += asteroid.speed;
            });

            map.drawAll(window.asteroids);
            ship.move();
        }, 40);
    };
};
