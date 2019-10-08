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
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
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
      orc: 'img/orc.png',
      player: 'img/player.png',
      title: 'img/title.jpg',
      tiles: 'img/tiles.png'
    });
    this.scenes = {
      loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_1__["Loading"](this),
      menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](this)
    };
  }

  _createClass(Game, [{
    key: "switchScene",
    value: function switchScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_3__["Scene"].LOADED:
          return this.scenes.menu;

        default:
          return this.scenes.menu;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_3__["Scene"].WORKING) {
        this.currentScene = this.switchScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.currentScene = this.scenes.loading;
      this.currentScene.init();
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
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

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
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);
    }
  }, {
    key: "listenFinish",
    value: function listenFinish(time) {
      time > 1000 ? this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"].LOADED) : 0; // this.game.canvas.imagesLoaded ? this.finish(Scene.LOADED) : 0;
    }
  }, {
    key: "render",
    value: function render(time) {
      this.listenFinish(time);
      this.game.canvas.fill('#666666');
      this.game.canvas.print('Loading...', 245, 320);

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
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
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, game));
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Menu.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.game.canvas.drawImage('title', 0, 0);

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__["Scene"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VfbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWVudS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImVsZW1lbnQiLCJpbml0Q2FudmFzIiwic2V0RGltZW50aW9ucyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiaW1hZ2VzIiwiaW1hZ2VzTG9hZGVkIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImxvYWRlciIsIkltYWdlTG9hZGVyIiwibG9hZCIsInRoZW4iLCJuYW1lcyIsIk9iamVjdCIsImFzc2lnbiIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHIiLCJ4IiwieSIsImZvbnQiLCJmaWxsVGV4dCIsImltYWdlIiwiZHJhd0ltYWdlIiwiR2FtZSIsImFyZ3MiLCJsb2FkSW1hZ2VzIiwib3JjIiwicGxheWVyIiwidGl0bGUiLCJ0aWxlcyIsInNjZW5lcyIsImxvYWRpbmciLCJMb2FkaW5nIiwibWVudSIsIk1lbnUiLCJzdGF0dXMiLCJTY2VuZSIsIkxPQURFRCIsInRpbWUiLCJjdXJyZW50U2NlbmUiLCJXT1JLSU5HIiwic3dpdGNoU2NlbmUiLCJpbml0IiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZnJhbWUiLCJpbWdGaWxlcyIsInByb21pc2VzIiwibmFtZSIsInB1c2giLCJsb2FkSW1hZ2UiLCJQcm9taXNlIiwiYWxsIiwic3JjIiwicmVzb2x2ZSIsIkltYWdlIiwib25sb2FkIiwid2luZG93IiwidG9wR2FtZSIsInN0YXJ0IiwiZ2FtZSIsImNvbnN0cnVjdG9yIiwiZmluaXNoIiwibGlzdGVuRmluaXNoIiwiZmlsbCIsInByaW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRU8sSUFBTUEsTUFBYjtBQUFBO0FBQUE7QUFDRSxrQkFBWUMsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtDLFVBQUwsRUFBZjtBQUNBLFNBQUtDLGFBQUwsQ0FBbUIsS0FBS0osS0FBeEIsRUFBK0IsS0FBS0MsTUFBcEM7QUFDQSxTQUFLSSxPQUFMLEdBQWUsS0FBS0MsVUFBTCxFQUFmO0FBQ0EsU0FBS0MsTUFB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QjtBQUNBLFdBQUtKLElBQUwsQ0FBVTVELE1BQVYsQ0FBaUJpRSxLQUFqQixDQUF1QixZQUF2QixFQUFxQyxHQUFyQyxFQUEwQyxHQUExQzs7QUFDQSwwRUFBYTNCLElBQWI7QUFDRDtBQW5CSDs7QUFBQTtBQUFBLEVBQTZCRiw0Q0FBN0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBRU8sSUFBTUYsSUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDRSxnQkFBWTBCLElBQVosRUFBa0I7QUFBQTs7QUFBQSw2RUFDVkEsSUFEVTtBQUVqQjs7QUFISDtBQUFBO0FBQUEsMkJBS1M7QUFDTDtBQUNEO0FBUEg7QUFBQTtBQUFBLDJCQVNTdEIsSUFUVCxFQVNlO0FBQ1gsV0FBS3NCLElBQUwsQ0FBVTVELE1BQVYsQ0FBaUJzQixTQUFqQixDQUEyQixPQUEzQixFQUFvQyxDQUFwQyxFQUF1QyxDQUF2Qzs7QUFDQSx1RUFBYWdCLElBQWI7QUFDRDtBQVpIOztBQUFBO0FBQUEsRUFBMEJGLDRDQUExQixFIiwiZmlsZSI6ImpzL3RvcF9nYW1lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tIFwiLi9pbWFnZV9sb2FkZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMge1xyXG4gIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5pbml0Q2FudmFzKCk7XHJcbiAgICB0aGlzLnNldERpbWVudGlvbnModGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgdGhpcy5pbWFnZXNMb2FkZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGluaXRDYW52YXMoKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcclxuICBcclxuICAgIGlmKCFjYW52YXMpIHtcclxuICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBjYW52YXM7XHJcbiAgfVxyXG5cclxuICBzZXREaW1lbnRpb25zKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHRoaXMuZWxlbWVudC53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5lbGVtZW50LmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcblxyXG4gIGdldENvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgfVxyXG5cclxuICBsb2FkSW1hZ2VzKGltYWdlcykge1xyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKGltYWdlcyk7XHJcbiAgICBsb2FkZXIubG9hZCgpLnRoZW4obmFtZXMgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlcyA9IE9iamVjdC5hc3NpZ24odGhpcy5pbWFnZXMsIGxvYWRlci5pbWFnZXMpO1xyXG4gICAgICB0aGlzLmltYWdlc0xvYWRlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZmlsbChjb2xvcikge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHByaW50KHN0ciwgeCwgeSkge1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmZmZmJztcclxuICAgIHRoaXMuY29udGV4dC5mb250ID0gJzMycHggQXJpYWwnO1xyXG4gICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHN0ciwgeCwgeSk7IFxyXG4gIH1cclxuXHJcbiAgZHJhd0ltYWdlKGltYWdlLCB4LCB5KSB7XHJcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW2ltYWdlXSwgeCwgeSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9zY2VuZXMvbG9hZGluZyc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL3NjZW5lcy9tZW51JztcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tICcuL3NjZW5lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICBjb25zdHJ1Y3RvcihhcmdzID0ge30pIHtcclxuICAgIGNvbnN0IHdpZHRoID0gYXJncy53aWR0aCB8fCA2NDA7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBhcmdzLmhlaWdodCB8fCA2NDA7XHJcbiAgXHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcbiAgICB0aGlzLmNhbnZhcy5sb2FkSW1hZ2VzKHtcclxuICAgICAgb3JjOiAnaW1nL29yYy5wbmcnLFxyXG4gICAgICBwbGF5ZXI6ICdpbWcvcGxheWVyLnBuZycsXHJcbiAgICAgIHRpdGxlOiAnaW1nL3RpdGxlLmpwZycsIFxyXG4gICAgICB0aWxlczogJ2ltZy90aWxlcy5wbmcnXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNjZW5lcyA9IHtcclxuICAgICAgbG9hZGluZzogbmV3IExvYWRpbmcodGhpcyksXHJcbiAgICAgIG1lbnU6IG5ldyBNZW51KHRoaXMpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoU2NlbmUoc3RhdHVzKSB7XHJcbiAgICBzd2l0Y2goc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5tZW51O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnJhbWUodGltZSkge1xyXG4gICAgaWYodGhpcy5jdXJyZW50U2NlbmUuc3RhdHVzICE9IFNjZW5lLldPUktJTkcpIHtcclxuICAgICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnN3aXRjaFNjZW5lKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyk7XHJcbiAgICAgIHRoaXMuY3VycmVudFNjZW5lLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1cnJlbnRTY2VuZS5yZW5kZXIodGltZSk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUgPSB0aGlzLnNjZW5lcy5sb2FkaW5nO1xyXG4gICAgdGhpcy5jdXJyZW50U2NlbmUuaW5pdCgpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcihpbWdGaWxlcykge1xyXG4gICAgdGhpcy5pbWdGaWxlcyA9IGltZ0ZpbGVzO1xyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICB9XHJcblxyXG4gIGxvYWQoKSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLmltZ0ZpbGVzKSB7XHJcbiAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkSW1hZ2UobmFtZSwgdGhpcy5pbWdGaWxlc1tuYW1lXSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZShuYW1lLCBzcmMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgdGhpcy5pbWFnZXNbbmFtZV0gPSBpbWFnZTtcclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShuYW1lKTtcclxuICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XHJcblxyXG4vLyBJbml0aWFsaXplIGFuZCBzdGFydCB0aGUgZ2FtZVxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvcEdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gIHRvcEdhbWUuc3RhcnQoKTtcclxufSIsImV4cG9ydCBjbGFzcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBXT1JLSU5HKCkgICAgeyByZXR1cm4gJ1dPUktJTkcnOyAgICB9XHJcbiAgc3RhdGljIGdldCBMT0FERUQoKSAgICAgeyByZXR1cm4gJ0xPQURFRCc7ICAgICB9XHJcbiAgc3RhdGljIGdldCBTVEFSVF9HQU1FKCkgeyByZXR1cm4gJ1NUQVJUX0dBTUUnOyB9XHJcbiAgc3RhdGljIGdldCBHQU1FX09WRVIoKSAgeyByZXR1cm4gJ0dBTUVfT1ZFUic7ICB9XHJcbiAgc3RhdGljIGdldCBHQU1FX1dJTigpICAgeyByZXR1cm4gJ0dBTUVfV0lOJzsgICB9XHJcbiAgc3RhdGljIGdldCBGSU5JU0hFRCgpICAgeyByZXR1cm4gJ0ZJTklTSEVEJzsgICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuY29uc3RydWN0b3IuV09SS0lORztcclxuICB9XHJcbiAgXHJcbiAgZmluaXNoKHN0YXR1cykge1xyXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge31cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgc3VwZXIuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuRmluaXNoKHRpbWUpIHtcclxuICAgIHRpbWUgPiAxMDAwID8gdGhpcy5maW5pc2goU2NlbmUuTE9BREVEKSA6IDA7XHJcbiAgICAvLyB0aGlzLmdhbWUuY2FudmFzLmltYWdlc0xvYWRlZCA/IHRoaXMuZmluaXNoKFNjZW5lLkxPQURFRCkgOiAwO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHRpbWUpIHtcclxuICAgIHRoaXMubGlzdGVuRmluaXNoKHRpbWUpO1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5maWxsKCcjNjY2NjY2Jyk7XHJcbiAgICB0aGlzLmdhbWUuY2FudmFzLnByaW50KCdMb2FkaW5nLi4uJywgMjQ1LCAzMjApO1xyXG4gICAgc3VwZXIucmVuZGVyKHRpbWUpO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSAnLi4vc2NlbmUnXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFNjZW5lIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lKTtcclxuICB9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICBzdXBlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGltZSkge1xyXG4gICAgdGhpcy5nYW1lLmNhbnZhcy5kcmF3SW1hZ2UoJ3RpdGxlJywgMCwgMCk7XHJcbiAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==