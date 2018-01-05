class Actor {
    constructor( speed = 0,  life = 0, x = 0, y = 0) {
        this._speed = speed;
        this._life = life;
        this._x = x;
        this._y = y;
    }

    set x(x) {
        this._x = x;
    }

    get x() {
        return this._x;
    }
    set y(y) {
        this._y = y;
    }

    get y() {
        return this._y;
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
