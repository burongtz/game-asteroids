class Helper {
    static get ASTEROID_LIMIT() {
        return 500;
    };

    static get ASTEROID_MIN_TIME() {
        return 500;
    };

    static get ASTEROID_MAX_TIME() {
        return 60000;
    };

    static getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Helper;