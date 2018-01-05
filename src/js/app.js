import Map from './map';
import Event from './events';
import Sprite from './Sprite';
import Ship from './Ship';

window.onload = function() {
    var sprite = new Sprite("img/game.png");
    var map = new Map();
    window.ship = new Ship(map, sprite);
    sprite.image.onload = function() {
        map.drawStars(250);
        ship.move();
        //map.ctx.drawImage(sprite.image, 0, 0);

        setInterval(function() {
            // console.log("AAAAAA");
        }, 80);
    };
};
