import Helper from './helper';

class Map {
    constructor(image) {
        this.canvas = document.querySelector('#asteroids');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height =this. canvas.height;
        this.starsLimit = 250;
        this.starsPosition = this.generateStarsPosition(this.starsLimit);
        this.image = image;
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

    drawShip(x) {
        this.ctx.drawImage(this.image, 265, 152, 122, 80, x, 126, 45, 25);
    }

    drawAsteroid(x, y) {
        this.ctx.drawImage(this.image, 0, 0, 55, 55, x, y, 20, 20);
    }

    drawAll(asteroids, ship, bullets) {
        var that = this;

        this.ctx.clearRect(0, 0, map.width, map.height);
        this.drawStars();
        asteroids.forEach(function(asteroid) {
            that.drawAsteroid(asteroid.x, asteroid.y);
        });
        this.drawShip(ship.x);
        this.drawBullets(bullets);
    }

    drawBullets(arrayBullet) {
        if (arrayBullet.length <= 0) {
            return;
        }
        arrayBullet.forEach(function(bullet, index) {
            if (bullet.y == 0) {
                arrayBullet.splice(index, 1);
                return;
            }
            this.ctx.drawImage(this.image, 392, 152, 27, 29, bullet.x + 19, bullet.y--, 10, 10);
        }, this);
    }
}

export default Map;
