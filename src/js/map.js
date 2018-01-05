const Helper = require('./helper');

class Map {
    constructor() {
        this.canvas = document.querySelector('#asteroids');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height =this. canvas.height;
    }

    drawStar(x, y) {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = '3px FontAwesome';
        this.ctx.fillText('*', x, y);
    }

    generateStarsPosition(starsLimit) {
        var starsPosition = [] ;
        for (var i = 0; i < starsLimit; i++) {
            starsPosition.push({
                x: Helper.getRandom(0, 600),
                y: Helper.getRandom(0, 500)
            });
        }
        return starsPosition;
    }

    drawStars(quantity) {
        var starsPosition = this.generateStarsPosition(quantity);
        for (var i = 0; i < quantity; i++) {
            this.drawStar(starsPosition[i].x, starsPosition[i].y);
        }
    }
}

module.exports = Map;