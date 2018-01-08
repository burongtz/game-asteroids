/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function () {
    function Actor() {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var life = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Actor);

        this._speed = speed;
        this._life = life;
        this._x = x;
        this._y = y;
    }

    _createClass(Actor, [{
        key: "addLife",
        value: function addLife(life) {
            this.life += life;
        }
    }, {
        key: "subLife",
        value: function subLife(life) {
            this.life -= life;
        }
    }, {
        key: "x",
        set: function set(x) {
            this._x = x;
        },
        get: function get() {
            return this._x;
        }
    }, {
        key: "y",
        set: function set(y) {
            this._y = y;
        },
        get: function get() {
            return this._y;
        }
    }, {
        key: "life",
        set: function set(life) {
            this._life = life;
        },
        get: function get() {
            return this._life;
        }
    }, {
        key: "speed",
        set: function set(speed) {
            this._speed = speed;
        },
        get: function get() {
            return this._speed;
        }
    }]);

    return Actor;
}();

/* harmony default export */ __webpack_exports__["a"] = (Actor);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
    function Helper() {
        _classCallCheck(this, Helper);
    }

    _createClass(Helper, null, [{
        key: "getRandom",
        value: function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }, {
        key: "ASTEROID_LIMIT",
        get: function get() {
            return 10;
        }
    }]);

    return Helper;
}();

/* harmony default export */ __webpack_exports__["a"] = (Helper);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(10);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sprite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ship__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Asteroid__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bullet__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper__ = __webpack_require__(1);








__webpack_require__(9);

window.onload = function () {
    var sprite = new __WEBPACK_IMPORTED_MODULE_1__Sprite__["a" /* default */]("img/game.png");

    window.asteroids = [];
    window.map = new __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */](sprite.image);
    window.ship = new __WEBPACK_IMPORTED_MODULE_2__Ship__["a" /* default */](5, 100, 0, 0);
    window.arrayBullet = [];
    window.Bullet = __WEBPACK_IMPORTED_MODULE_4__Bullet__["a" /* default */];

    // Create asteroids
    for (var i = 0, size = __WEBPACK_IMPORTED_MODULE_5__helper__["a" /* default */].getRandom(1, __WEBPACK_IMPORTED_MODULE_5__helper__["a" /* default */].ASTEROID_LIMIT); i < size; i++) {
        window.asteroids.push(new __WEBPACK_IMPORTED_MODULE_3__Asteroid__["a" /* default */](__WEBPACK_IMPORTED_MODULE_5__helper__["a" /* default */].getRandom(1, 3), 100, __WEBPACK_IMPORTED_MODULE_5__helper__["a" /* default */].getRandom(0, map.width - 20), -15));
    }

    sprite.image.onload = function () {
        setInterval(function () {
            // Change asteroids position
            window.asteroids.forEach(function (asteroid) {
                asteroid.y += asteroid.speed;
            });

            map.drawAll(window.asteroids, window.ship, arrayBullet);
        }, 40);
    };
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Map = function () {
    function Map(image) {
        _classCallCheck(this, Map);

        this.canvas = document.querySelector('#asteroids');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.starsLimit = 250;
        this.starsPosition = this.generateStarsPosition(this.starsLimit);
        this.image = image;
    }

    _createClass(Map, [{
        key: 'drawStar',
        value: function drawStar(x, y) {
            this.ctx.fillStyle = "#ffffff";
            this.ctx.font = '3px Arial';
            this.ctx.fillText('*', x, y);
        }
    }, {
        key: 'generateStarsPosition',
        value: function generateStarsPosition(starsLimit) {
            var starsPosition = [];
            for (var i = 0; i < starsLimit; i++) {
                starsPosition.push({
                    x: __WEBPACK_IMPORTED_MODULE_0__helper__["a" /* default */].getRandom(0, this.width),
                    y: __WEBPACK_IMPORTED_MODULE_0__helper__["a" /* default */].getRandom(0, this.height)
                });
            }
            return starsPosition;
        }
    }, {
        key: 'drawStars',
        value: function drawStars() {
            for (var i = 0; i < this.starsLimit; i++) {
                this.drawStar(this.starsPosition[i].x, this.starsPosition[i].y);
            }
        }
    }, {
        key: 'drawShip',
        value: function drawShip(x) {
            this.ctx.drawImage(this.image, 265, 152, 122, 80, x, 126, 45, 25);
        }
    }, {
        key: 'drawAsteroid',
        value: function drawAsteroid(x, y) {
            this.ctx.drawImage(this.image, 0, 0, 55, 55, x, y, 20, 20);
        }
    }, {
        key: 'drawAll',
        value: function drawAll(asteroids, ship, bullets) {
            var that = this;

            this.ctx.clearRect(0, 0, map.width, map.height);
            this.drawStars();
            asteroids.forEach(function (asteroid) {
                that.drawAsteroid(asteroid.x, asteroid.y);
            });
            this.drawShip(ship.x);
            this.drawBullets(bullets);
        }
    }, {
        key: 'drawBullets',
        value: function drawBullets(arrayBullet) {
            if (arrayBullet.length <= 0) {
                return;
            }
            arrayBullet.forEach(function (bullet, index) {
                if (bullet.y == 0) {
                    arrayBullet.splice(index, 1);
                    return;
                }
                this.ctx.drawImage(this.image, 392, 152, 27, 29, bullet.x + 19, bullet.y--, 10, 10);
            }, this);
        }
    }]);

    return Map;
}();

/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sprite = function Sprite(src) {
    _classCallCheck(this, Sprite);

    this.image = new Image();
    this.image.src = src;
};

/* harmony default export */ __webpack_exports__["a"] = (Sprite);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Actor__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Ship = function (_Actor) {
    _inherits(Ship, _Actor);

    function Ship() {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var life = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Ship);

        return _possibleConstructorReturn(this, (Ship.__proto__ || Object.getPrototypeOf(Ship)).call(this, speed, life, x, y));
    }

    _createClass(Ship, [{
        key: 'move',
        value: function move() {
            if (this.x < 0) {
                this.x = 0;
            }

            if (this.x > 254) {
                this.x = 254;
            }
        }
    }]);

    return Ship;
}(__WEBPACK_IMPORTED_MODULE_0__Actor__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Ship);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Actor__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Asteroid = function (_Actor) {
    _inherits(Asteroid, _Actor);

    function Asteroid() {
        var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var life = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        _classCallCheck(this, Asteroid);

        return _possibleConstructorReturn(this, (Asteroid.__proto__ || Object.getPrototypeOf(Asteroid)).call(this, speed, life, x, y));
    }

    return Asteroid;
}(__WEBPACK_IMPORTED_MODULE_0__Actor__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Asteroid);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Actor__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Bullet = function (_Actor) {
    _inherits(Bullet, _Actor);

    function Bullet(speed, life, x, y) {
        _classCallCheck(this, Bullet);

        return _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, speed, life, x, y));
    }

    return Bullet;
}(__WEBPACK_IMPORTED_MODULE_0__Actor__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Bullet);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// Key events
var isLeftDown = false;
var isRightDown = false;
var isSpaceDown = false;
window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            // Left
            isLeftDown = true;
            if (isSpaceDown) {
                shootBullet();
            } else {
                moveLeft();
            }
            break;
        case 39:
            // Right
            isRightDown = true;
            if (isSpaceDown) {
                shootBullet();
            } else {
                moveRight();
            }
            break;
    }
};
window.onkeyup = function (event) {
    switch (event.keyCode) {
        case 32:
            // Space
            isSpaceDown = false;
            break;
        case 37:
            // Left
            isLeftDown = false;
            break;
        case 39:
            // Right
            isRightDown = false;
            break;
    }
};

window.onkeypress = function (event) {
    switch (event.keyCode) {
        case 32:
            // Space
            isSpaceDown = true;
            shootBullet();
            break;
    }
};

function shootBullet() {
    if (isLeftDown) {
        moveLeft();
    }
    if (isRightDown) {
        moveRight();
    }
    arrayBullet.push(new Bullet(0, 0, ship.x, 119));
}

function moveLeft() {
    ship.x -= ship.speed;
    ship.move();
    map.drawAll(window.asteroids, window.ship, arrayBullet);
}

function moveRight() {
    ship.x += ship.speed;
    ship.move();
    map.drawAll(window.asteroids, window.ship, arrayBullet);
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);