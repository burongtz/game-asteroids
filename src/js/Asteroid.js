import Actor from './Actor';

class Asteroid extends Actor {
    constructor(speed = 0,  life = 0, x = 0, y = 0) {
        super(speed, life, x, y);
        this.spriteW = 60;
        this.spriteH = 60;
    }
}

export default Asteroid;
