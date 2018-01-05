// Key events
window.onkeydown = function(event) {
    switch (event.keyCode) {
        case 37: // Left
            console.log("LEFT");
        break;
        case 38: // Up
            console.log("UP");
        break;
        case 39: // Right
        console.log("RIGHT");
        break;
        case 40: // Bottom
            console.log("BOTTOM");
        break;
    }
};