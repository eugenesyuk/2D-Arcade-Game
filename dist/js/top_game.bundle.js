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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/tile.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Animation =
/*#__PURE__*/
function (_Tile) {
  _inherits(Animation, _Tile);

  function Animation(_ref) {
    var _this;

    var imageName = _ref.imageName,
        frames = _ref.frames,
        speed = _ref.speed,
        _ref$repeat = _ref.repeat,
        repeat = _ref$repeat === void 0 ? true : _ref$repeat,
        _ref$autorun = _ref.autorun,
        autorun = _ref$autorun === void 0 ? true : _ref$autorun,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Animation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Animation).call(this, {
      imageName: imageName,
      tileX: frames[0].tileX,
      tileY: frames[0].tileY,
      width: width,
      height: height
    }));
    _this.frames = frames;
    _this.speed = speed;
    _this.repeat = repeat;
    _this.run = autorun;
    _this.prevTime = 0;
    _this.currentFrame = 0;
    _this.framesCount = frames.length;
    return _this;
  }

  _createClass(Animation, [{
    key: "setFrame",
    value: function setFrame(index) {
      this.currentFrame = index;
      this.tileX = this.frames[index].tileX;
      this.tileY = this.frames[index].tileY;
    }
  }, {
    key: "start",
    value: function start() {
      this.setFrame(0);
      this.run = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.run = false;
    }
  }, {
    key: "nextFrame",
    value: function nextFrame() {
      if (this.currentFrame + 1 === this.framesCount) {
        this.repeat ? this.setFrame(0) : this.stop();
      } else {
        this.setFrame(this.currentFrame + 1);
      }
    }
  }, {
    key: "update",
    value: function update(time) {
      if (!this.run) return;

      if (this.prevTime === 0) {
        this.prevTime = time;
        return;
      }

      if (time - this.prevTime > this.speed) {
        this.nextFrame();
        this.prevTime += this.speed;
      }
    }
  }]);

  return Animation;
}(_tile__WEBPACK_IMPORTED_MODULE_0__["Tile"]);

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-loader */ "./src/image-loader.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Canvas =
/*#__PURE__*/
function () {
  function Canvas(width, height) {
    _classCallCheck(this, Canvas);

    this.width = width;
    this.height = height;
    this.element = this.init();
    this.setSize(this.width, this.height);
    this.context = this.getContext();
    this.images = {};
    this.imagesLoaded = false;
  }

  _createClass(Canvas, [{
    key: "init",
    value: function init() {
      var canvas = document.body.querySelector('canvas');

      if (!canvas) {
        canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
      }

      return canvas;
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.element.width = width;
      this.element.height = height;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.element.getContext('2d');
    }
  }, {
    key: "loadImages",
    value: function loadImages(images) {
      var _this = this;

      var loader = new _image_loader__WEBPACK_IMPORTED_MODULE_0__["ImageLoader"](images);
      loader.load().then(function (names) {
        _this.images = Object.assign(_this.images, loader.images);
        _this.imagesLoaded = true;
      });
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "drawText",
    value: function drawText(str, x, y) {
      this.context.fillStyle = '#ffffff';
      this.context.font = '32px Arial';
      this.context.fillText(str, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(image, x, y) {
      this.context.drawImage(this.images[image], x, y);
    }
  }, {
    key: "drawTile",
    value: function drawTile(tile) {
      this.context.drawImage(this.images[tile.imageName], tile.tileX, tile.tileY, tile.width, tile.height, tile.canvasX, tile.canvasY, tile.width, tile.height);
    }
  }]);

  return Canvas;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./src/keyboard.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_level_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/level_1 */ "./src/scenes/level_1.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game =
/*#__PURE__*/
function () {
  function Game() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Game);

    var width = args.width || 640;
    var height = args.height || 640;
    this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__["Canvas"](width, height);
    this.canvas.loadImages({
      orc: './img/orc.png',
      player: './img/player.png',
      title: './img/title.jpg',
      tiles: './img/tiles.png'
    });
    this.keyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"]();
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_3__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_4__["Menu"](this),
      level_1: new _scenes_level_1__WEBPACK_IMPORTED_MODULE_5__["Level_1"](this)
    };
  }

  _createClass(Game, [{
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status === _scene__WEBPACK_IMPORTED_MODULE_2__["Scene"].statuses.finished) {
        this.currentScene = this.nextScene;
        this.currentScene.start();
      }

      this.currentScene.render(time);
      this.currentScene.listenEvents(time);
      this.currentScene.update(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.currentScene = this.scenes.loading;
      this.currentScene.start();
      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/image-loader.js":
/*!*****************************!*\
  !*** ./src/image-loader.js ***!
  \*****************************/
/*! exports provided: ImageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return ImageLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageLoader =
/*#__PURE__*/
function () {
  function ImageLoader(imgFiles) {
    _classCallCheck(this, ImageLoader);

    this.imgFiles = imgFiles;
    this.images = {};
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load() {
      var promises = [];

      for (var name in this.imgFiles) {
        promises.push(this.loadImage(name, this.imgFiles[name]));
      }

      return Promise.all(promises);
    }
  }, {
    key: "loadImage",
    value: function loadImage(name, src) {
      var _this = this;

      return new Promise(function (resolve) {
        var image = new Image();
        _this.images[name] = image;

        image.onload = function () {
          return resolve(name);
        };

        image.src = src;
      });
    }
  }]);

  return ImageLoader;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
 // Initialize and start the game

window.onload = function () {
  var topGame = new _game__WEBPACK_IMPORTED_MODULE_0__["Game"]();
  topGame.start();
};

/***/ }),

/***/ "./src/keyboard.js":
/*!*************************!*\
  !*** ./src/keyboard.js ***!
  \*************************/
/*! exports provided: Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Keyboard =
/*#__PURE__*/
function () {
  function Keyboard() {
    var _this = this;

    _classCallCheck(this, Keyboard);

    this.left = false;
    this.up = false;
    this.right = false;
    this.down = false;
    this.enter = false;
    this.keys = new Map([[37, 'left'], [38, 'up'], [39, 'right'], [40, 'down'], [13, 'enter']]);
    document.addEventListener('keydown', function (event) {
      return _this.update(event, true);
    });
    document.addEventListener('keyup', function (event) {
      return _this.update(event, false);
    });
  }

  _createClass(Keyboard, [{
    key: "update",
    value: function update(event, down) {
      var key = event.keyCode;

      if (this.keys.has(key)) {
        event.preventDefault();
        event.stopPropagation();
        this[this.keys.get(key)] = down;
      }
    }
  }]);

  return Keyboard;
}();

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scene =
/*#__PURE__*/
function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.statuses.waiting;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.statuses.waiting;
    }
  }, {
    key: "start",
    value: function start() {
      this.status = this.constructor.statuses.started;
    }
  }, {
    key: "finish",
    value: function finish() {
      this.status = this.constructor.statuses.finished;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }, {
    key: "listenEvents",
    value: function listenEvents(time) {}
  }, {
    key: "update",
    value: function update(time) {}
  }, {
    key: "nextScene",
    set: function set(nextScene) {
      this.game.nextScene = nextScene;
    }
  }], [{
    key: "statuses",
    get: function get() {
      return {
        waiting: 'waiting',
        started: 'started',
        finished: 'finished'
      };
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/level_1.js":
/*!*******************************!*\
  !*** ./src/scenes/level_1.js ***!
  \*******************************/
/*! exports provided: Level_1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level_1", function() { return Level_1; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite */ "./src/sprite.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Level_1 =
/*#__PURE__*/
function (_Scene) {
  _inherits(Level_1, _Scene);

  function Level_1(game) {
    var _this;

    _classCallCheck(this, Level_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Level_1).call(this, game));
    _this.landscapeTiles = new _sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.orcTiles = new _sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"]({
      imageName: 'orc',
      imageWidth: 832,
      imageHeight: 1344
    });
    _this.tree = _this.landscapeTiles.getTile(7);

    _this.tree.setPosition(10, 10);

    _this.sand = _this.landscapeTiles.getTile(22);

    _this.sand.setPosition(300, 400);

    _this.orc = _this.orcTiles.getAnimation([1, 2, 3, 4, 5, 6, 7], 150);

    _this.orc.setPosition(50, 50);

    return _this;
  }

  _createClass(Level_1, [{
    key: "render",
    value: function render(time) {
      _get(_getPrototypeOf(Level_1.prototype), "render", this).call(this, time);

      this.game.canvas.fill('#efefef');
      this.game.canvas.drawTile(this.sand);
      this.game.canvas.drawTile(this.tree);
      this.game.canvas.drawTile(this.orc);
    }
  }, {
    key: "update",
    value: function update(time) {
      _get(_getPrototypeOf(Level_1.prototype), "update", this).call(this, time);

      this.orc.update(time);
    }
  }]);

  return Level_1;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Loading =
/*#__PURE__*/
function (_Scene) {
  _inherits(Loading, _Scene);

  function Loading(game) {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, game));
  }

  _createClass(Loading, [{
    key: "render",
    value: function render(time) {
      this.game.canvas.fill('#666666');
      this.game.canvas.drawText('Loading...', 245, 320);

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }, {
    key: "listenEvents",
    value: function listenEvents(time) {
      if (this.game.canvas.imagesLoaded && time > 1000) {
        this.nextScene = this.game.scenes.menu;
        this.finish();
      }
    }
  }]);

  return Loading;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var Menu =
/*#__PURE__*/
function (_Scene) {
  _inherits(Menu, _Scene);

  function Menu(game) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
    _this.canvas = _this.game.canvas;
    _this.keyboard = _this.game.keyboard;
    return _this;
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.canvas.drawImage('title', 0, 0);
      this.canvas.drawText('Press ENTER', 220, 500);

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      if (this.keyboard.enter) {
        this.nextScene = this.game.scenes.level_1;
        this.finish();
      }
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/tile.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(Sprite, [{
    key: "getTile",
    value: function getTile(index) {
      return new _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"]({
        imageName: this.imageName,
        tileX: this.getTileX(index),
        tileY: this.getTileY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getAnimation",
    value: function getAnimation(indexes, speed, repeat, autorun) {
      var _this = this;

      return new _animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]({
        imageName: this.imageName,
        frames: indexes.map(function (i) {
          return {
            tileX: _this.getTileX(i),
            tileY: _this.getTileY(i)
          };
        }),
        speed: speed,
        repeat: repeat,
        autorun: autorun,
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "getTileX",
    value: function getTileX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "getTileY",
    value: function getTileY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return Sprite;
}();

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile =
/*#__PURE__*/
function () {
  function Tile(_ref) {
    var imageName = _ref.imageName,
        tileX = _ref.tileX,
        tileY = _ref.tileY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Tile);

    this.imageName = imageName;
    this.tileX = tileX;
    this.tileY = tileY;
    this.width = width;
    this.height = height;
    this.canvasX = 0;
    this.canvasY = 0;
  }

  _createClass(Tile, [{
    key: "setPosition",
    value: function setPosition(x, y) {
      this.canvasX = x;
      this.canvasY = y;
    }
  }]);

  return Tile;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9rZXlib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sZXZlbF8xLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGlsZS5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb24iLCJpbWFnZU5hbWUiLCJmcmFtZXMiLCJzcGVlZCIsInJlcGVhdCIsImF1dG9ydW4iLCJ3aWR0aCIsImhlaWdodCIsInRpbGVYIiwidGlsZVkiLCJydW4iLCJwcmV2VGltZSIsImN1cnJlbnRGcmFtZSIsImZyYW1lc0NvdW50IiwibGVuZ3RoIiwiaW5kZXgiLCJzZXRGcmFtZSIsInN0b3AiLCJ0aW1lIiwibmV4dEZyYW1lIiwiVGlsZSIsIkNhbnZhcyIsImVsZW1lbnQiLCJpbml0Iiwic2V0U2l6ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW1hZ2VzIiwiaW1hZ2VzTG9hZGVkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImxvYWRlciIsIkltYWdlTG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHIiLCJ4IiwieSIsImZvbnQiLCJmaWxsVGV4dCIsImltYWdlIiwiZHJhd0ltYWdlIiwidGlsZSIsImNhbnZhc1giLCJjYW52YXNZIiwiR2FtZSIsImFyZ3MiLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsImtleWJvYXJkIiwiS2V5Ym9hcmQiLCJzY2VuZXMiLCJsb2FkaW5nIiwiTG9hZGluZyIsIm1lbnUiLCJNZW51IiwibGV2ZWxfMSIsIkxldmVsXzEiLCJjdXJyZW50U2NlbmUiLCJzdGF0dXMiLCJTY2VuZSIsInN0YXR1c2VzIiwiZmluaXNoZWQiLCJuZXh0U2NlbmUiLCJzdGFydCIsInJlbmRlciIsImxpc3RlbkV2ZW50cyIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiaW1nRmlsZXMiLCJwcm9taXNlcyIsIm5hbWUiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsInRvcEdhbWUiLCJsZWZ0IiwidXAiLCJyaWdodCIsImRvd24iLCJlbnRlciIsImtleXMiLCJNYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJrZXlDb2RlIiwiaGFzIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJnYW1lIiwiY29uc3RydWN0b3IiLCJ3YWl0aW5nIiwic3RhcnRlZCIsImxhbmRzY2FwZVRpbGVzIiwiU3ByaXRlIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0Iiwib3JjVGlsZXMiLCJ0cmVlIiwiZ2V0VGlsZSIsInNldFBvc2l0aW9uIiwic2FuZCIsImdldEFuaW1hdGlvbiIsImZpbGwiLCJkcmF3VGlsZSIsImRyYXdUZXh0IiwiZmluaXNoIiwic3ByaXRlV2lkdGgiLCJzcHJpdGVIZWlnaHQiLCJnZXRUaWxlWCIsImdldFRpbGVZIiwiaW5kZXhlcyIsIm1hcCIsImkiLCJNYXRoIiwidHJ1bmMiXSwibWFwcGluZ3MiOiI7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LEtBQUtaLFVBQS9DLElBQTZELEtBQUthLFlBQXpFO0FBQ0Q7QUFyQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPLElBQU05RyxJQUFiO0FBQUE7QUFBQTtBQUNFLHNCQUFnRTtBQUFBLFFBQW5EbkIsU0FBbUQsUUFBbkRBLFNBQW1EO0FBQUEsUUFBeENPLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLFFBQWpDQyxLQUFpQyxRQUFqQ0EsS0FBaUM7QUFBQSwwQkFBMUJILEtBQTBCO0FBQUEsUUFBMUJBLEtBQTBCLDJCQUFsQixFQUFrQjtBQUFBLDJCQUFkQyxNQUFjO0FBQUEsUUFBZEEsTUFBYyw0QkFBTCxFQUFLOztBQUFBOztBQUM5RCxTQUFLTixTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtPLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUs4QyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0Q7O0FBVEg7QUFBQTtBQUFBLGdDQVdjUixDQVhkLEVBV2lCQyxDQVhqQixFQVdvQjtBQUNoQixXQUFLTSxPQUFMLEdBQWVQLENBQWY7QUFDQSxXQUFLUSxPQUFMLEdBQWVQLENBQWY7QUFDRDtBQWRIOztBQUFBO0FBQUEsSSIsImZpbGUiOiJqcy90b3BfZ2FtZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi90aWxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIGV4dGVuZHMgVGlsZSB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgZnJhbWVzLCBzcGVlZCwgcmVwZWF0ID0gdHJ1ZSwgYXV0b3J1biA9IHRydWUsIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0IH0pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgaW1hZ2VOYW1lOiBpbWFnZU5hbWUsXHJcbiAgICAgIHRpbGVYOiBmcmFtZXNbMF0udGlsZVgsXHJcbiAgICAgIHRpbGVZOiBmcmFtZXNbMF0udGlsZVksXHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcclxuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgdGhpcy5ydW4gPSBhdXRvcnVuO1xyXG4gICAgdGhpcy5wcmV2VGltZSA9IDA7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICB0aGlzLmZyYW1lc0NvdW50ID0gZnJhbWVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHNldEZyYW1lKGluZGV4KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IGluZGV4O1xyXG4gICAgdGhpcy50aWxlWCA9IHRoaXMuZnJhbWVzW2luZGV4XS50aWxlWDtcclxuICAgIHRoaXMudGlsZVkgPSB0aGlzLmZyYW1lc1tpbmRleF0udGlsZVk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICB0aGlzLnJ1biA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgdGhpcy5ydW4gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5leHRGcmFtZSgpIHtcclxuICAgIGlmKCh0aGlzLmN1cnJlbnRGcmFtZSArIDEpID09PSB0aGlzLmZyYW1lc0NvdW50KSB7XHJcbiAgICAgIHRoaXMucmVwZWF0ID8gdGhpcy5zZXRGcmFtZSgwKSA6IHRoaXMuc3RvcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRGcmFtZSh0aGlzLmN1cnJlbnRGcmFtZSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHRpbWUpIHtcclxuICAgIGlmKCF0aGlzLnJ1bikgcmV0dXJuO1xyXG4gICAgaWYodGhpcy5wcmV2VGltZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLnByZXZUaW1lID0gdGltZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYoKHRpbWUgLSB0aGlzLnByZXZUaW1lKSA+IHRoaXMuc3BlZWQpIHtcclxuICAgICAgdGhpcy5uZXh0RnJhbWUoKTtcclxuICAgICAgdGhpcy5wcmV2VGltZSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSBcIi4vaW1hZ2UtbG9hZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzIHtcclxuICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuaW5pdCgpO1xyXG4gICAgdGhpcy5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgIHRoaXMuaW1hZ2VzTG9hZGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XHJcbiAgXHJcbiAgICBpZighY2FudmFzKSB7XHJcbiAgICAgIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gY2FudmFzO1xyXG4gIH1cclxuXHJcbiAgc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcyhpbWFnZXMpIHtcclxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBJbWFnZUxvYWRlcihpbWFnZXMpO1xyXG4gICAgbG9hZGVyLmxvYWQoKS50aGVuKG5hbWVzID0+IHtcclxuICAgICAgdGhpcy5pbWFnZXMgPSBPYmplY3QuYXNzaWduKHRoaXMuaW1hZ2VzLCBsb2FkZXIuaW1hZ2VzKTtcclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmaWxsKGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhd1RleHQoc3RyLCB4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSAnMzJweCBBcmlhbCc7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoc3RyLCB4LCB5KTsgXHJcbiAgfVxyXG5cclxuICBkcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbaW1hZ2VdLCB4LCB5KTtcclxuICB9XHJcblxyXG4gIGRyYXdUaWxlKHRpbGUpIHtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbdGlsZS5pbWFnZU5hbWVdLCBcclxuICAgICAgdGlsZS50aWxlWCwgdGlsZS50aWxlWSwgdGlsZS53aWR0aCwgdGlsZS5oZWlnaHQsXHJcbiAgICAgIHRpbGUuY2FudmFzWCwgdGlsZS5jYW52YXNZLCB0aWxlLndpZHRoLCB0aWxlLmhlaWdodCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJy4va2V5Ym9hcmQnO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4vc2NlbmUnO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcclxuaW1wb3J0IHsgTGV2ZWxfMSB9IGZyb20gJy4vc2NlbmVzL2xldmVsXzEnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gIGNvbnN0cnVjdG9yKGFyZ3MgPSB7fSkge1xyXG4gICAgY29uc3Qgd2lkdGggPSBhcmdzLndpZHRoIHx8IDY0MDtcclxuICAgIGNvbnN0IGhlaWdodCA9IGFyZ3MuaGVpZ2h0IHx8IDY0MDtcclxuICBcclxuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuICAgIHRoaXMuY2FudmFzLmxvYWRJbWFnZXMoe1xyXG4gICAgICBvcmM6ICcuL2ltZy9vcmMucG5nJyxcclxuICAgICAgcGxheWVyOiAnLi9pbWcvcGxheWVyLnBuZycsXHJcbiAgICAgIHRpdGxlOiAnLi9pbWcvdGl0bGUuanBnJywgXHJcbiAgICAgIHRpbGVzOiAnLi9pbWcvdGlsZXMucG5nJ1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XHJcblxyXG4gICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKHRoaXMpLFxyXG4gICAgICBtZW51OiBuZXcgTWVudSh0aGlzKSxcclxuICAgICAgbGV2ZWxfMTogbmV3IExldmVsXzEodGhpcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZyYW1lKHRpbWUpIHtcclxuICAgIGlmKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyA9PT0gU2NlbmUuc3RhdHVzZXMuZmluaXNoZWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLm5leHRTY2VuZTtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5saXN0ZW5FdmVudHModGltZSk7XHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS51cGRhdGUodGltZSk7XHJcbiAgXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuc3RhcnQoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aW1lID0+IHRoaXMuZnJhbWUodGltZSkpO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgY29uc3RydWN0b3IoaW1nRmlsZXMpIHtcclxuICAgIHRoaXMuaW1nRmlsZXMgPSBpbWdGaWxlcztcclxuICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgfVxyXG5cclxuICBsb2FkKCkge1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gdGhpcy5pbWdGaWxlcykge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZEltYWdlKG5hbWUsIHRoaXMuaW1nRmlsZXNbbmFtZV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW1hZ2UobmFtZSwgc3JjKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIHRoaXMuaW1hZ2VzW25hbWVdID0gaW1hZ2U7XHJcbiAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUobmFtZSk7XHJcbiAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgIH0pO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBhbmQgc3RhcnQgdGhlIGdhbWVcclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBjb25zdCB0b3BHYW1lID0gbmV3IEdhbWUoKTtcclxuICB0b3BHYW1lLnN0YXJ0KCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgS2V5Ym9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sZWZ0ID0gZmFsc2U7XHJcbiAgICB0aGlzLnVwID0gZmFsc2U7XHJcbiAgICB0aGlzLnJpZ2h0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmRvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuZW50ZXIgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmtleXMgPSBuZXcgTWFwKFtcclxuICAgICAgWzM3LCAnbGVmdCddLCBbMzgsICd1cCddLCBbMzksICdyaWdodCddLCBbNDAsICdkb3duJ10sIFsxMywgJ2VudGVyJ11cclxuICAgIF0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCB0cnVlKSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy51cGRhdGUoZXZlbnQsIGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZXZlbnQsIGRvd24pIHtcclxuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XHJcbiAgXHJcbiAgICBpZih0aGlzLmtleXMuaGFzKGtleSkpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXNbdGhpcy5rZXlzLmdldChrZXkpXSA9IGRvd247XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXR1c2VzLndhaXRpbmc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0YXR1c2VzKCkgIHsgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3YWl0aW5nOiAnd2FpdGluZycsIFxyXG4gICAgICBzdGFydGVkOiAnc3RhcnRlZCcsIFxyXG4gICAgICBmaW5pc2hlZDogJ2ZpbmlzaGVkJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdHVzZXMud2FpdGluZztcclxuICB9XHJcbiAgXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdHVzZXMuc3RhcnRlZDtcclxuICB9XHJcblxyXG4gIGZpbmlzaCgpIHtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0dXNlcy5maW5pc2hlZDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgc2V0IG5leHRTY2VuZShuZXh0U2NlbmUpIHtcclxuICAgIHRoaXMuZ2FtZS5uZXh0U2NlbmUgPSBuZXh0U2NlbmU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge31cclxuICBsaXN0ZW5FdmVudHModGltZSkge31cclxuICB1cGRhdGUodGltZSkge31cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbF8xIGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG5cclxuICAgIHRoaXMubGFuZHNjYXBlVGlsZXMgPSBuZXcgU3ByaXRlKHtcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDBcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5vcmNUaWxlcyA9IG5ldyBTcHJpdGUoe1xyXG4gICAgICBpbWFnZU5hbWU6ICdvcmMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA4MzIsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiAxMzQ0XHJcbiAgICB9KTtcclxuICBcclxuICAgIHRoaXMudHJlZSA9IHRoaXMubGFuZHNjYXBlVGlsZXMuZ2V0VGlsZSg3KTtcclxuICAgIHRoaXMudHJlZS5zZXRQb3NpdGlvbigxMCwgMTApO1xyXG5cclxuICAgIHRoaXMuc2FuZCA9IHRoaXMubGFuZHNjYXBlVGlsZXMuZ2V0VGlsZSgyMik7XHJcbiAgICB0aGlzLnNhbmQuc2V0UG9zaXRpb24oMzAwLCA0MDApO1xyXG5cclxuICAgIHRoaXMub3JjID0gdGhpcy5vcmNUaWxlcy5nZXRBbmltYXRpb24oWzEsMiwzLDQsNSw2LDddLCAxNTApO1xyXG4gICAgdGhpcy5vcmMuc2V0UG9zaXRpb24oNTAsNTApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIHRoaXMuZ2FtZS5jYW52YXMuZmlsbCgnI2VmZWZlZicpO1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5kcmF3VGlsZSh0aGlzLnNhbmQpO1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5kcmF3VGlsZSh0aGlzLnRyZWUpO1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5kcmF3VGlsZSh0aGlzLm9yYyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUodGltZSkge1xyXG4gICAgc3VwZXIudXBkYXRlKHRpbWUpO1xyXG4gICAgdGhpcy5vcmMudXBkYXRlKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5maWxsKCcjNjY2NjY2Jyk7XHJcbiAgICB0aGlzLmdhbWUuY2FudmFzLmRyYXdUZXh0KCdMb2FkaW5nLi4uJywgMjQ1LCAzMjApO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuRXZlbnRzKHRpbWUpIHtcclxuICAgIGlmKHRoaXMuZ2FtZS5jYW52YXMuaW1hZ2VzTG9hZGVkICYmIHRpbWUgPiAxMDAwKSB7XHJcbiAgICAgIHRoaXMubmV4dFNjZW5lID0gdGhpcy5nYW1lLnNjZW5lcy5tZW51O1xyXG4gICAgICB0aGlzLmZpbmlzaCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLmtleWJvYXJkID0gdGhpcy5nYW1lLmtleWJvYXJkO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UoJ3RpdGxlJywgMCwgMCk7XHJcbiAgICB0aGlzLmNhbnZhcy5kcmF3VGV4dCgnUHJlc3MgRU5URVInLCAyMjAsIDUwMCk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5FdmVudHMoKSB7XHJcbiAgICBpZih0aGlzLmtleWJvYXJkLmVudGVyKSB7XHJcbiAgICAgIHRoaXMubmV4dFNjZW5lID0gdGhpcy5nYW1lLnNjZW5lcy5sZXZlbF8xO1xyXG4gICAgICB0aGlzLmZpbmlzaCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFRpbGUgfSBmcm9tIFwiLi90aWxlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjR9KSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcclxuICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRUaWxlKGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBuZXcgVGlsZSh7XHJcbiAgICAgICAgaW1hZ2VOYW1lOiB0aGlzLmltYWdlTmFtZSxcclxuICAgICAgICB0aWxlWDogdGhpcy5nZXRUaWxlWChpbmRleCksXHJcbiAgICAgICAgdGlsZVk6IHRoaXMuZ2V0VGlsZVkoaW5kZXgpLFxyXG4gICAgICAgIHdpZHRoOiB0aGlzLnNwcml0ZVdpZHRoLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5zcHJpdGVIZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldEFuaW1hdGlvbihpbmRleGVzLCBzcGVlZCwgcmVwZWF0LCBhdXRvcnVuKSB7XHJcbiAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKHtcclxuICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICAgIGZyYW1lczogaW5kZXhlcy5tYXAoaSA9PiAoe3RpbGVYOiB0aGlzLmdldFRpbGVYKGkpLCB0aWxlWTogdGhpcy5nZXRUaWxlWShpKX0pKSxcclxuICAgICAgICBzcGVlZDogc3BlZWQsXHJcbiAgICAgICAgcmVwZWF0OiByZXBlYXQsXHJcbiAgICAgICAgYXV0b3J1bjogYXV0b3J1bixcclxuICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0VGlsZVgoaW5kZXgpIHtcclxuICAgICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZVkoaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIE1hdGgudHJ1bmMoKC0taW5kZXggKiB0aGlzLnNwcml0ZVdpZHRoKSAvIHRoaXMuaW1hZ2VXaWR0aCkgKiB0aGlzLnNwcml0ZUhlaWdodDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUaWxlIHtcclxuICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCB0aWxlWCwgdGlsZVksIHdpZHRoID0gNjQsIGhlaWdodCA9IDY0fSkge1xyXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XHJcbiAgICB0aGlzLnRpbGVYID0gdGlsZVg7XHJcbiAgICB0aGlzLnRpbGVZID0gdGlsZVk7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHRoaXMuY2FudmFzWCA9IDA7XHJcbiAgICB0aGlzLmNhbnZhc1kgPSAwO1xyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgdGhpcy5jYW52YXNYID0geDtcclxuICAgIHRoaXMuY2FudmFzWSA9IHk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==