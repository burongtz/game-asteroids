import Actor from './Actor';

class Ship extends Actor {
    constructor(speed = 0,  life = 0, x = 0, y = 0) {
        super(speed, life, x, y);
    }

    move() {
        if (this.x < 0) {
            this.x = 0;
        }

        if (this.x > 254) {
            this.x = 254;
        }
    }
}

export default Ship;
