import Map from './map';
import Event from './events';

window.onload = function() {
    var map = new Map();
    map.drawStars(250);
    
    setInterval(function() {
        // console.log("AAAAAA");
    }, 80);
};
