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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sprite__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Ship__ = __webpack_require__(11);





window.onload = function () {
    var sprite = new __WEBPACK_IMPORTED_MODULE_2__Sprite__["a" /* default */]("img/game.png");
    var map = new __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */]();
    window.ship = new __WEBPACK_IMPORTED_MODULE_3__Ship__["a" /* default */](map, sprite);
    sprite.image.onload = function () {
        map.drawStars(250);
        ship.move();
        //map.ctx.drawImage(sprite.image, 0, 0);

        setInterval(function () {
            // console.log("AAAAAA");
        }, 80);
    };
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Map = function () {
    function Map() {
        _classCallCheck(this, Map);

        this.canvas = document.querySelector('#asteroids');
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
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
        value: function drawStars(quantity) {
            var starsPosition = this.generateStarsPosition(quantity);
            for (var i = 0; i < quantity; i++) {
                this.drawStar(starsPosition[i].x, starsPosition[i].y);
            }
        }
    }, {
        key: 'drawShip',
        value: function drawShip(image, x) {
            this.ctx.drawImage(image, 265, 152, 122, 80, x, 126, 45, 25);
        }
    }]);

    return Map;
}();

/* harmony default export */ __webpack_exports__["a"] = (Map);

/***/ }),
/* 3 */
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
    }]);

    return Helper;
}();

/* harmony default export */ __webpack_exports__["a"] = (Helper);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// Key events
window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            // Left
            ship.x -= 2;
            ship.move();
            break;
        case 38:
            // Up
            console.log("UP");
            break;
        case 39:
            // Right
            ship.x += 2;
            ship.move();
            break;
        case 40:
            // Bottom
            console.log("BOTTOM");
            break;
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Actor__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Ship = function (_Actor) {
    _inherits(Ship, _Actor);

    function Ship(map, sprite) {
        _classCallCheck(this, Ship);

        var _this = _possibleConstructorReturn(this, (Ship.__proto__ || Object.getPrototypeOf(Ship)).call(this));

        _this.map = map;
        _this.sprite = sprite;
        return _this;
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
            this.map.drawShip(this.sprite.image, this.x);
        }
    }]);

    return Ship;
}(__WEBPACK_IMPORTED_MODULE_0__Actor__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Ship);

/***/ }),
/* 12 */
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

/***/ })
/******/ ]);