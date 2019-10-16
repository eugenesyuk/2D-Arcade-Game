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
    key: "drawSprite",
    value: function drawSprite(sprite) {
      this.context.drawImage(this.images[sprite.imageName], sprite.tileX, sprite.tileY, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
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
/* harmony import */ var _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprite-sheet */ "./src/sprite-sheet.js");
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
    _this.tiles = new _sprite_sheet__WEBPACK_IMPORTED_MODULE_1__["SpriteSheet"]({
      imageName: 'tiles',
      imageWidth: 640,
      imageHeight: 640
    });
    _this.tree = _this.tiles.getSprite(7);

    _this.tree.setCoordinates(10, 10);

    _this.sand = _this.tiles.getSprite(22);

    _this.sand.setCoordinates(300, 400);

    return _this;
  }

  _createClass(Level_1, [{
    key: "render",
    value: function render(time) {
      this.game.canvas.fill('#efefef');
      this.game.canvas.drawSprite(this.sand);
      this.game.canvas.drawSprite(this.tree);

      _get(_getPrototypeOf(Level_1.prototype), "render", this).call(this, time);
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

/***/ "./src/sprite-sheet.js":
/*!*****************************!*\
  !*** ./src/sprite-sheet.js ***!
  \*****************************/
/*! exports provided: SpriteSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteSheet", function() { return SpriteSheet; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/sprite.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SpriteSheet =
/*#__PURE__*/
function () {
  function SpriteSheet(_ref) {
    var imageName = _ref.imageName,
        imageWidth = _ref.imageWidth,
        imageHeight = _ref.imageHeight,
        _ref$spriteWidth = _ref.spriteWidth,
        spriteWidth = _ref$spriteWidth === void 0 ? 64 : _ref$spriteWidth,
        _ref$spriteHeight = _ref.spriteHeight,
        spriteHeight = _ref$spriteHeight === void 0 ? 64 : _ref$spriteHeight;

    _classCallCheck(this, SpriteSheet);

    this.imageName = imageName;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
  }

  _createClass(SpriteSheet, [{
    key: "getSprite",
    value: function getSprite(index) {
      return new _sprite__WEBPACK_IMPORTED_MODULE_0__["Sprite"]({
        imageName: this.imageName,
        tileX: this.gettileX(index),
        tileY: this.gettileY(index),
        width: this.spriteWidth,
        height: this.spriteHeight
      });
    }
  }, {
    key: "gettileX",
    value: function gettileX(index) {
      return --index * this.spriteWidth % this.imageWidth;
    }
  }, {
    key: "gettileY",
    value: function gettileY(index) {
      return Math.trunc(--index * this.spriteWidth / this.imageWidth) * this.spriteHeight;
    }
  }]);

  return SpriteSheet;
}();

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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite =
/*#__PURE__*/
function () {
  function Sprite(_ref) {
    var imageName = _ref.imageName,
        tileX = _ref.tileX,
        tileY = _ref.tileY,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 64 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 64 : _ref$height;

    _classCallCheck(this, Sprite);

    this.imageName = imageName;
    this.tileX = tileX;
    this.tileY = tileY;
    this.width = width;
    this.height = height;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "setCoordinates",
    value: function setCoordinates(x, y) {
      this.x = x;
      this.y = y;
    }
  }]);

  return Sprite;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2UtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbGV2ZWxfMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUtc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImVsZW1lbnQiLCJpbml0Iiwic2V0U2l6ZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW1hZ2VzIiwiaW1hZ2VzTG9hZGVkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImxvYWRlciIsIkltYWdlTG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHIiLCJ4IiwieSIsImZvbnQiLCJmaWxsVGV4dCIsImltYWdlIiwiZHJhd0ltYWdlIiwic3ByaXRlIiwiaW1hZ2VOYW1lIiwic291cmNlWCIsInNvdXJjZVkiLCJHYW1lIiwiYXJncyIsImxvYWRJbWFnZXMiLCJvcmMiLCJwbGF5ZXIiLCJ0aXRsZSIsInRpbGVzIiwia2V5Ym9hcmQiLCJLZXlib2FyZCIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJsZXZlbF8xIiwiTGV2ZWxfMSIsInRpbWUiLCJjdXJyZW50U2NlbmUiLCJzdGF0dXMiLCJTY2VuZSIsInN0YXR1c2VzIiwiZmluaXNoZWQiLCJuZXh0U2NlbmUiLCJzdGFydCIsInJlbmRlciIsImxpc3RlbkV2ZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiaW1nRmlsZXMiLCJwcm9taXNlcyIsIm5hbWUiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsInRvcEdhbWUiLCJsZWZ0IiwidXAiLCJyaWdodCIsImRvd24iLCJlbnRlciIsImtleXMiLCJNYXAiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ1cGRhdGUiLCJrZXkiLCJrZXlDb2RlIiwiaGFzIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJnYW1lIiwiY29uc3RydWN0b3IiLCJ3YWl0aW5nIiwic3RhcnRlZCIsIlNwcml0ZVNoZWV0IiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwidHJlZSIsImdldFNwcml0ZSIsInNldENvb3JkaW5hdGVzIiwic2FuZCIsImZpbGwiLCJkcmF3U3ByaXRlIiwicHJpbnQiLCJmaW5pc2giLCJzcHJpdGVXaWR0aCIsInNwcml0ZUhlaWdodCIsImluZGV4IiwiU3ByaXRlIiwiZ2V0U291cmNlWCIsImdldFNvdXJjZVkiLCJNYXRoIiwidHJ1bmMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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QyxLQUEwQjtBQUFBLFFBQTFCQSxLQUEwQiwyQkFBbEIsRUFBa0I7QUFBQSwyQkFBZEMsTUFBYztBQUFBLFFBQWRBLE1BQWMsNEJBQUwsRUFBSzs7QUFBQTs7QUFDbEUsU0FBS2dDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS25DLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUt5QixDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0Q7O0FBVEg7QUFBQTtBQUFBLG1DQVdpQkQsQ0FYakIsRUFXb0JDLENBWHBCLEVBV3VCO0FBQ25CLFdBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFdBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEO0FBZEg7O0FBQUE7QUFBQSxJIiwiZmlsZSI6ImpzL3RvcF9nYW1lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi9pbWFnZS1sb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5pbml0KCk7XHJcbiAgICB0aGlzLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgdGhpcy5pbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICBcclxuICAgIGlmKCFjYW52YXMpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBzZXRTaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuZWxlbWVudC53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5lbGVtZW50LmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcblxyXG4gIGdldENvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW1hZ2VzKGltYWdlcykge1xyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlcyk7XHJcbiAgICBsb2FkZXIubG9hZCgpLnRoZW4obmFtZXMgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICB0aGlzLmltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZpbGwoY29sb3IpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3VGV4dChzdHIsIHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XHJcbiAgICB0aGlzLmNvbnRleHQuZm9udCA9ICczMnB4IEFyaWFsJztcclxuICAgIHRoaXMuY29udGV4dC5maWxsVGV4dChzdHIsIHgsIHkpOyBcclxuICB9XHJcblxyXG4gIGRyYXdJbWFnZShpbWFnZSwgeCwgeSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tpbWFnZV0sIHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgZHJhd1Nwcml0ZShzcHJpdGUpIHtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbc3ByaXRlLmltYWdlTmFtZV0sIFxyXG4gICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCxcclxuICAgICAgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENhbnZhcyB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkJztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4vc2NlbmVzL2xvYWRpbmcnO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSAnLi9zY2VuZXMvbWVudSc7XHJcbmltcG9ydCB7IExldmVsXzEgfSBmcm9tICcuL3NjZW5lcy9sZXZlbF8xJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3RvcihhcmdzID0ge30pIHtcclxuICAgIGNvbnN0IHdpZHRoID0gYXJncy53aWR0aCB8fCA2NDA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBhcmdzLmhlaWdodCB8fCA2NDA7XHJcbiAgXHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmNhbnZhcy5sb2FkSW1hZ2VzKHtcclxuICAgICAgb3JjOiAnLi9pbWcvb3JjLnBuZycsXHJcbiAgICAgIHBsYXllcjogJy4vaW1nL3BsYXllci5wbmcnLFxyXG4gICAgICB0aXRsZTogJy4vaW1nL3RpdGxlLmpwZycsIFxyXG4gICAgICB0aWxlczogJy4vaW1nL3RpbGVzLnBuZydcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xyXG5cclxuICAgIHRoaXMuc2NlbmVzID0ge1xyXG4gICAgICBsb2FkaW5nOiBuZXcgTG9hZGluZyh0aGlzKSxcclxuICAgICAgbWVudTogbmV3IE1lbnUodGhpcyksXHJcbiAgICAgIGxldmVsXzE6IG5ldyBMZXZlbF8xKHRoaXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmcmFtZSh0aW1lKSB7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgPT09IFNjZW5lLnN0YXR1c2VzLmZpbmlzaGVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5uZXh0U2NlbmU7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUpO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUubGlzdGVuRXZlbnRzKHRpbWUpO1xyXG4gIFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXJ0KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yKGltZ0ZpbGVzKSB7XHJcbiAgICB0aGlzLmltZ0ZpbGVzID0gaW1nRmlsZXM7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuaW1nRmlsZXMpIHtcclxuICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLCB0aGlzLmltZ0ZpbGVzW25hbWVdKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlKG5hbWUsIHNyYykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xyXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuXHJcbi8vIEluaXRpYWxpemUgYW5kIHN0YXJ0IHRoZSBnYW1lXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wR2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgdG9wR2FtZS5zdGFydCgpO1xyXG59IiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmVudGVyID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5rZXlzID0gbmV3IE1hcChbXHJcbiAgICAgIFszNywgJ2xlZnQnXSwgWzM4LCAndXAnXSwgWzM5LCAncmlnaHQnXSwgWzQwLCAnZG93biddLCBbMTMsICdlbnRlciddXHJcbiAgICBdKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGV2ZW50LCBkb3duKSB7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xyXG4gIFxyXG4gICAgaWYodGhpcy5rZXlzLmhhcyhrZXkpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzW3RoaXMua2V5cy5nZXQoa2V5KV0gPSBkb3duO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0dXNlcy53YWl0aW5nO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdGF0dXNlcygpICB7IFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2FpdGluZzogJ3dhaXRpbmcnLCBcclxuICAgICAgc3RhcnRlZDogJ3N0YXJ0ZWQnLCBcclxuICAgICAgZmluaXNoZWQ6ICdmaW5pc2hlZCdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXR1c2VzLndhaXRpbmc7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXR1c2VzLnN0YXJ0ZWQ7XHJcbiAgfVxyXG5cclxuICBmaW5pc2goKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdHVzZXMuZmluaXNoZWQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHNldCBuZXh0U2NlbmUobmV4dFNjZW5lKSB7XHJcbiAgICB0aGlzLmdhbWUubmV4dFNjZW5lID0gbmV4dFNjZW5lO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHt9XHJcblxyXG4gIGxpc3RlbkV2ZW50cyh0aW1lKSB7fVxyXG59IiwiaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi4vc2NlbmVcIjtcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiLi4vc3ByaXRlLXNoZWV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxfMSBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuXHJcbiAgICB0aGlzLnRpbGVzID0gbmV3IFNwcml0ZVNoZWV0KHtcclxuICAgICAgaW1hZ2VOYW1lOiAndGlsZXMnLFxyXG4gICAgICBpbWFnZVdpZHRoOiA2NDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiA2NDBcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy50cmVlID0gdGhpcy50aWxlcy5nZXRTcHJpdGUoNyk7XHJcbiAgICB0aGlzLnRyZWUuc2V0Q29vcmRpbmF0ZXMoMTAsIDEwKTtcclxuXHJcbiAgICB0aGlzLnNhbmQgPSB0aGlzLnRpbGVzLmdldFNwcml0ZSgyMik7XHJcbiAgICB0aGlzLnNhbmQuc2V0Q29vcmRpbmF0ZXMoMzAwLCA0MDApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMuZ2FtZS5jYW52YXMuZmlsbCgnI2VmZWZlZicpO1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5kcmF3U3ByaXRlKHRoaXMuc2FuZCk7XHJcbiAgICB0aGlzLmdhbWUuY2FudmFzLmRyYXdTcHJpdGUodGhpcy50cmVlKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMuZ2FtZS5jYW52YXMuZmlsbCgnIzY2NjY2NicpO1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5wcmludCgnTG9hZGluZy4uLicsIDI0NSwgMzIwKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcblxyXG4gIGxpc3RlbkV2ZW50cyh0aW1lKSB7XHJcbiAgICBpZih0aGlzLmdhbWUuY2FudmFzLmltYWdlc0xvYWRlZCAmJiB0aW1lID4gMTAwMCkge1xyXG4gICAgICB0aGlzLm5leHRTY2VuZSA9IHRoaXMuZ2FtZS5zY2VuZXMubWVudTtcclxuICAgICAgdGhpcy5maW5pc2goKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJ1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLmdhbWUuY2FudmFzO1xyXG4gICAgdGhpcy5rZXlib2FyZCA9IHRoaXMuZ2FtZS5rZXlib2FyZDtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy5jYW52YXMuZHJhd0ltYWdlKCd0aXRsZScsIDAsIDApO1xyXG4gICAgdGhpcy5jYW52YXMucHJpbnQoJ1ByZXNzIEVOVEVSJywgMjIwLCA1MDApO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuRXZlbnRzKCkge1xyXG4gICAgaWYodGhpcy5rZXlib2FyZC5lbnRlcikge1xyXG4gICAgICB0aGlzLm5leHRTY2VuZSA9IHRoaXMuZ2FtZS5zY2VuZXMubGV2ZWxfMTtcclxuICAgICAgdGhpcy5maW5pc2goKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9zcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7aW1hZ2VOYW1lLCBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgc3ByaXRlV2lkdGggPSA2NCwgc3ByaXRlSGVpZ2h0ID0gNjR9KSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xyXG4gICAgICB0aGlzLmltYWdlV2lkdGggPSBpbWFnZVdpZHRoO1xyXG4gICAgICB0aGlzLmltYWdlSGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc3ByaXRlV2lkdGggPSBzcHJpdGVXaWR0aDtcclxuICAgICAgdGhpcy5zcHJpdGVIZWlnaHQgPSBzcHJpdGVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBuZXcgU3ByaXRlKHtcclxuICAgICAgICBpbWFnZU5hbWU6IHRoaXMuaW1hZ2VOYW1lLFxyXG4gICAgICAgIHNvdXJjZVg6IHRoaXMuZ2V0U291cmNlWChpbmRleCksXHJcbiAgICAgICAgc291cmNlWTogdGhpcy5nZXRTb3VyY2VZKGluZGV4KSxcclxuICAgICAgICB3aWR0aDogdGhpcy5zcHJpdGVXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuc3ByaXRlSGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNvdXJjZVgoaW5kZXgpIHtcclxuICAgICAgcmV0dXJuICgtLWluZGV4ICogdGhpcy5zcHJpdGVXaWR0aCkgJSB0aGlzLmltYWdlV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U291cmNlWShpbmRleCkge1xyXG4gICAgICByZXR1cm4gTWF0aC50cnVuYygoLS1pbmRleCAqIHRoaXMuc3ByaXRlV2lkdGgpIC8gdGhpcy5pbWFnZVdpZHRoKSAqIHRoaXMuc3ByaXRlSGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3Ioe2ltYWdlTmFtZSwgc291cmNlWCwgc291cmNlWSwgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjR9KSB7XHJcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcclxuICAgIHRoaXMuc291cmNlWCA9IHNvdXJjZVg7XHJcbiAgICB0aGlzLnNvdXJjZVkgPSBzb3VyY2VZO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLnggPSAwO1xyXG4gICAgdGhpcy55ID0gMDtcclxuICB9XHJcblxyXG4gIHNldENvb3JkaW5hdGVzKHgsIHkpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=