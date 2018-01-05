import Actor from './Actor';

class Ship extends Actor {
    constructor(map, sprite) {
        super();
        this.map = map;
        this.sprite = sprite
    }



    move() {
        if (this.x < 0) {
            this.x = 0;
        }

        if (this.x > 254) {
            this.x = 254;
        }
        this.map.drawShip(this.sprite.image, this.x);
    }
}

export default Ship;
