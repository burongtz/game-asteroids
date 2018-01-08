import Map from './map';
import Sprite from './Sprite';
import Ship from './Ship';
import Asteroid from './Asteroid';

import Bullet from './Bullet';
import Helper from './helper';

require('./events');

window.onload = function() {
    var sprite = new Sprite("img/game.png");

    window.asteroids = [];
    window.map = new Map(sprite.image);
    window.ship = new Ship(5, 100, 0, 0);
    window.arrayBullet = [];
    window.Bullet = Bullet;

    // Create asteroids
    for (var i = 0; i < Helper.ASTEROID_LIMIT; i++) {
        setTimeout(function() {
            window.asteroids.push(
                new Asteroid(Helper.getRandom(1, 3), 100, Helper.getRandom(0 , map.width - 20), -15)
            );
        }, Helper.getRandom(Helper.ASTEROID_MIN_TIME, Helper.ASTEROID_MAX_TIME));
    }

    sprite.image.onload = function() {
        setInterval(function() {
            // Change asteroids position
            window.asteroids.forEach(function(asteroid) {
                asteroid.y += asteroid.speed;
            });

            map.drawAll(window.asteroids, window.ship);
            map.drawBullets(sprite.image, arrayBullet);
        }, 40);
    };
};
