class Actor {
    constructor( speed = 0,  life = 0) {
        this._speed = speed;
        this._life = life;
    }

    set life(life) {
        this._life = life;
    }

    get life() {
        return this._life;
    }

    set speed(speed) {
        this._speed = speed;
    }

    get speed() {
        return this._speed;
    }

    addLife(life) {
        this.life += life;
    }

    subLife(life) {
        this.life -= life;
    }
}

export default Actor;
