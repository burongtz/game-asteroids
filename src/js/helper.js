class Helper {
    static get ASTEROID_LIMIT() {
        return 10;
    };
    static getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Helper;