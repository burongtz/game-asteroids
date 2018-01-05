import Map from './map';
import Event from './events';
import Sprite from './Sprite';

window.onload = function() {
    var sprite = new Sprite("img/game.png");
    var map = new Map();

    sprite.image.onload = function() {
        map.drawStars(250);
        map.ctx.drawImage(sprite.image, 0, 0);
        
        setInterval(function() {
            // console.log("AAAAAA");
        }, 80);
    };
};
