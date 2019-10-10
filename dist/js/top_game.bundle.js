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
/* harmony import */ var _image_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image_loader */ "./src/image_loader.js");
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
    this.element = this.initCanvas();
    this.setDimentions(this.width, this.height);
    this.context = this.getContext();
    this.images = {};
    this.imagesLoaded = false;
  }

  _createClass(Canvas, [{
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = document.body.querySelector('canvas');

      if (!canvas) {
        canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
      }

      return canvas;
    }
  }, {
    key: "setDimentions",
    value: function setDimentions(width, height) {
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
    key: "print",
    value: function print(str, x, y) {
      this.context.fillStyle = '#ffffff';
      this.context.font = '32px Arial';
      this.context.fillText(str, x, y);
    }
  }, {
    key: "drawImage",
    value: function drawImage(image, x, y) {
      this.context.drawImage(this.images[image], x, y);
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
    this.scenesMap = new Map([['menu', this.scenes.menu], ['level_1', this.scenes.level_1]]);
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

/***/ "./src/image_loader.js":
/*!*****************************!*\
  !*** ./src/image_loader.js ***!
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
    value: function finish(nextScene) {
      this.status = this.constructor.statuses.finished;
      this.game.nextScene = this.game.scenesMap.get(nextScene);
    }
  }, {
    key: "render",
    value: function render(time) {}
  }, {
    key: "listenEvents",
    value: function listenEvents(time) {}
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
    _classCallCheck(this, Level_1);

    return _possibleConstructorReturn(this, _getPrototypeOf(Level_1).call(this, game));
  }

  _createClass(Level_1, [{
    key: "render",
    value: function render(time) {
      this.game.canvas.fill('#efefef');

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
      this.game.canvas.print('Loading...', 245, 320);

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }, {
    key: "listenEvents",
    value: function listenEvents(time) {
      this.game.canvas.imagesLoaded && time > 1000 ? this.finish('menu') : 0;
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
      this.canvas.print('Press ENTER', 220, 500);

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }, {
    key: "listenEvents",
    value: function listenEvents() {
      if (this.keyboard.enter) {
        this.finish('level_1');
      }
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VfbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbGV2ZWxfMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tZW51LmpzIl0sIm5hbWVzIjpbIkNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZWxlbWVudCIsImluaXRDYW52YXMiLCJzZXREaW1lbnRpb25zIiwiY29udGV4dCIsImdldENvbnRleHQiLCJpbWFnZXMiLCJpbWFnZXNMb2FkZWQiLCJjYW52YXMiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwibG9hZGVyIiwiSW1hZ2VMb2FkZXIiLCJsb2FkIiwidGhlbiIsIm5hbWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0ciIsIngiLCJ5IiwiZm9udCIsImZpbGxUZXh0IiwiaW1hZ2UiLCJkcmF3SW1hZ2UiLCJHYW1lIiwiYXJncyIsImxvYWRJbWFnZXMiLCJvcmMiLCJwbGF5ZXIiLCJ0aXRsZSIsInRpbGVzIiwia2V5Ym9hcmQiLCJLZXlib2FyZCIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJsZXZlbF8xIiwiTGV2ZWxfMSIsInNjZW5lc01hcCIsIk1hcCIsInRpbWUiLCJjdXJyZW50U2NlbmUiLCJzdGF0dXMiLCJTY2VuZSIsInN0YXR1c2VzIiwiZmluaXNoZWQiLCJuZXh0U2NlbmUiLCJzdGFydCIsInJlbmRlciIsImxpc3RlbkV2ZW50cyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiaW1nRmlsZXMiLCJwcm9taXNlcyIsIm5hbWUiLCJwdXNoIiwibG9hZEltYWdlIiwiUHJvbWlzZSIsImFsbCIsInNyYyIsInJlc29sdmUiLCJJbWFnZSIsIm9ubG9hZCIsIndpbmRvdyIsInRvcEdhbWUiLCJsZWZ0IiwidXAiLCJyaWdodCIsImRvd24iLCJlbnRlciIsImtleXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ1cGRhdGUiLCJrZXkiLCJrZXlDb2RlIiwiaGFzIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXQiLCJnYW1lIiwiY29uc3RydWN0b3IiLCJ3YWl0aW5nIiwic3RhcnRlZCIsImZpbGwiLCJwcmludCIsImZpbmlzaCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7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M0MsNENBQTdCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1SLElBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQ0UsZ0JBQVk2QyxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLDhFQUFNQSxJQUFOO0FBRUEsVUFBS2pGLE1BQUwsR0FBYyxNQUFLaUYsSUFBTCxDQUFVakYsTUFBeEI7QUFDQSxVQUFLOEIsUUFBTCxHQUFnQixNQUFLbUQsSUFBTCxDQUFVbkQsUUFBMUI7QUFKZ0I7QUFLakI7O0FBTkg7QUFBQTtBQUFBLDJCQVFTO0FBQ0w7QUFDRDtBQVZIO0FBQUE7QUFBQSwyQkFZU1csSUFaVCxFQVllO0FBQ1gsV0FBS3pDLE1BQUwsQ0FBWXNCLFNBQVosQ0FBc0IsT0FBdEIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEM7QUFDQSxXQUFLdEIsTUFBTCxDQUFZc0YsS0FBWixDQUFrQixhQUFsQixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0Qzs7QUFDQSx1RUFBYTdDLElBQWI7QUFDRDtBQWhCSDtBQUFBO0FBQUEsbUNBa0JpQjtBQUNiLFVBQUcsS0FBS1gsUUFBTCxDQUFjd0MsS0FBakIsRUFBd0I7QUFDdEIsYUFBS2lCLE1BQUwsQ0FBWSxTQUFaO0FBQ0Q7QUFDRjtBQXRCSDs7QUFBQTtBQUFBLEVBQTBCM0MsNENBQTFCLEUiLCJmaWxlIjoianMvdG9wX2dhbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gXCIuL2ltYWdlX2xvYWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmluaXRDYW52YXMoKTtcclxuICAgIHRoaXMuc2V0RGltZW50aW9ucyh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcclxuICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICB0aGlzLmltYWdlc0xvYWRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaW5pdENhbnZhcygpIHtcclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xyXG4gIFxyXG4gICAgaWYoIWNhbnZhcykge1xyXG4gICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGNhbnZhcztcclxuICB9XHJcblxyXG4gIHNldERpbWVudGlvbnMod2lkdGgsIGhlaWdodCkge1xyXG4gICAgdGhpcy5lbGVtZW50LndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmVsZW1lbnQuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZXMoaW1hZ2VzKSB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoaW1hZ2VzKTtcclxuICAgIGxvYWRlci5sb2FkKCkudGhlbihuYW1lcyA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzID0gT2JqZWN0LmFzc2lnbih0aGlzLmltYWdlcywgbG9hZGVyLmltYWdlcyk7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmaWxsKGNvbG9yKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcHJpbnQoc3RyLCB4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmZmZmYnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZvbnQgPSAnMzJweCBBcmlhbCc7XHJcbiAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoc3RyLCB4LCB5KTsgXHJcbiAgfVxyXG5cclxuICBkcmF3SW1hZ2UoaW1hZ2UsIHgsIHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbaW1hZ2VdLCB4LCB5KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEtleWJvYXJkIH0gZnJvbSAnLi9rZXlib2FyZCc7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi9zY2VuZSc7XHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL3NjZW5lcy9sb2FkaW5nJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vc2NlbmVzL21lbnUnO1xyXG5pbXBvcnQgeyBMZXZlbF8xIH0gZnJvbSAnLi9zY2VuZXMvbGV2ZWxfMSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoYXJncyA9IHt9KSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IGFyZ3Mud2lkdGggfHwgNjQwO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gYXJncy5oZWlnaHQgfHwgNjQwO1xyXG4gIFxyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgdGhpcy5jYW52YXMubG9hZEltYWdlcyh7XHJcbiAgICAgIG9yYzogJy4vaW1nL29yYy5wbmcnLFxyXG4gICAgICBwbGF5ZXI6ICcuL2ltZy9wbGF5ZXIucG5nJyxcclxuICAgICAgdGl0bGU6ICcuL2ltZy90aXRsZS5qcGcnLCBcclxuICAgICAgdGlsZXM6ICcuL2ltZy90aWxlcy5wbmcnXHJcbiAgICB9KTtcclxuICBcclxuICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQoKTtcclxuXHJcbiAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpLFxyXG4gICAgICBsZXZlbF8xOiBuZXcgTGV2ZWxfMSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NlbmVzTWFwID0gbmV3IE1hcChbXHJcbiAgICAgIFsnbWVudScsIHRoaXMuc2NlbmVzLm1lbnVdLFxyXG4gICAgICBbJ2xldmVsXzEnLCB0aGlzLnNjZW5lcy5sZXZlbF8xXVxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBmcmFtZSh0aW1lKSB7XHJcbiAgICBpZih0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMgPT09IFNjZW5lLnN0YXR1c2VzLmZpbmlzaGVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5uZXh0U2NlbmU7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUucmVuZGVyKHRpbWUpO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUubGlzdGVuRXZlbnRzKHRpbWUpO1xyXG4gIFxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgIHRoaXMuY3VycmVudFNjZW5lLnN0YXJ0KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yKGltZ0ZpbGVzKSB7XHJcbiAgICB0aGlzLmltZ0ZpbGVzID0gaW1nRmlsZXM7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgbG9hZCgpIHtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKGxldCBuYW1lIGluIHRoaXMuaW1nRmlsZXMpIHtcclxuICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmxvYWRJbWFnZShuYW1lLCB0aGlzLmltZ0ZpbGVzW25hbWVdKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlKG5hbWUsIHNyYykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IGltYWdlO1xyXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKG5hbWUpO1xyXG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9nYW1lJztcclxuXHJcbi8vIEluaXRpYWxpemUgYW5kIHN0YXJ0IHRoZSBnYW1lXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9wR2FtZSA9IG5ldyBHYW1lKCk7XHJcbiAgdG9wR2FtZS5zdGFydCgpO1xyXG59IiwiZXhwb3J0IGNsYXNzIEtleWJvYXJkIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy51cCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmVudGVyID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5rZXlzID0gbmV3IE1hcChbXHJcbiAgICAgIFszNywgJ2xlZnQnXSwgWzM4LCAndXAnXSwgWzM5LCAncmlnaHQnXSwgWzQwLCAnZG93biddLCBbMTMsICdlbnRlciddXHJcbiAgICBdKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZShldmVudCwgdHJ1ZSkpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlKGV2ZW50LCBmYWxzZSkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGV2ZW50LCBkb3duKSB7XHJcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xyXG4gIFxyXG4gICAgaWYodGhpcy5rZXlzLmhhcyhrZXkpKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzW3RoaXMua2V5cy5nZXQoa2V5KV0gPSBkb3duO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0dXNlcy53YWl0aW5nO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdGF0dXNlcygpICB7IFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2FpdGluZzogJ3dhaXRpbmcnLCBcclxuICAgICAgc3RhcnRlZDogJ3N0YXJ0ZWQnLCBcclxuICAgICAgZmluaXNoZWQ6ICdmaW5pc2hlZCdcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXR1c2VzLndhaXRpbmc7XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5zdGF0dXMgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXR1c2VzLnN0YXJ0ZWQ7XHJcbiAgfVxyXG5cclxuICBmaW5pc2gobmV4dFNjZW5lKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdHVzZXMuZmluaXNoZWQ7XHJcbiAgICB0aGlzLmdhbWUubmV4dFNjZW5lID0gdGhpcy5nYW1lLnNjZW5lc01hcC5nZXQobmV4dFNjZW5lKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7fVxyXG5cclxuICBsaXN0ZW5FdmVudHModGltZSkge31cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxfMSBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLmdhbWUuY2FudmFzLmZpbGwoJyNlZmVmZWYnKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gJy4uL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU2NlbmUge1xyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMuZ2FtZS5jYW52YXMuZmlsbCgnIzY2NjY2NicpO1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5wcmludCgnTG9hZGluZy4uLicsIDI0NSwgMzIwKTtcclxuICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICB9XHJcblxyXG4gIGxpc3RlbkV2ZW50cyh0aW1lKSB7XHJcbiAgICB0aGlzLmdhbWUuY2FudmFzLmltYWdlc0xvYWRlZCAmJiB0aW1lID4gMTAwMCA/IHRoaXMuZmluaXNoKCdtZW51JykgOiAwO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuZ2FtZS5jYW52YXM7XHJcbiAgICB0aGlzLmtleWJvYXJkID0gdGhpcy5nYW1lLmtleWJvYXJkO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHN1cGVyLmluaXQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0aW1lKSB7XHJcbiAgICB0aGlzLmNhbnZhcy5kcmF3SW1hZ2UoJ3RpdGxlJywgMCwgMCk7XHJcbiAgICB0aGlzLmNhbnZhcy5wcmludCgnUHJlc3MgRU5URVInLCAyMjAsIDUwMCk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW5FdmVudHMoKSB7XHJcbiAgICBpZih0aGlzLmtleWJvYXJkLmVudGVyKSB7XHJcbiAgICAgIHRoaXMuZmluaXNoKCdsZXZlbF8xJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==