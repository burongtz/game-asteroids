import Helper from './helper';

class Map {
    constructor() {
        this.canvas = document.querySelector('#asteroids');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height =this. canvas.height;
        this.starsLimit = 250;
        this.starsPosition = this.generateStarsPosition(this.starsLimit);
    }

    drawStar(x, y) {
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = '3px Arial';
        this.ctx.fillText('*', x, y);
    }

    generateStarsPosition(starsLimit) {
        var starsPosition = [] ;
        for (var i = 0; i < starsLimit; i++) {
            starsPosition.push({
                x: Helper.getRandom(0, this.width),
                y: Helper.getRandom(0, this.height)
            });
        }
        return starsPosition;
    }

    drawStars() {
        for (var i = 0; i < this.starsLimit; i++) {
            this.drawStar(this.starsPosition[i].x, this.starsPosition[i].y);
        }
    }
}

export default Map;