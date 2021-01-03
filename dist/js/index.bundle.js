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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: canvas, ctx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _quadtree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quadtree */ "./src/js/quadtree.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; // Event Listeners

addEventListener('resize', function () {
  _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].width = innerWidth;
  _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].height = innerHeight;
  init();
});

var Circle = /*#__PURE__*/function () {
  function Circle(x, y, radius, color) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["strokeStyle"])(this.color);
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_2__["circle"])(this.x, this.y, this.radius);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["stroke"])();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "intersects",
    value: function intersects(entity) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["distance"])(this.x, entity.x, this.y, entity.y) < this.radius + entity.radius;
    }
  }]);

  return Circle;
}();

var Rectangle = /*#__PURE__*/function () {
  function Rectangle(x, y, width, height, color) {
    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  _createClass(Rectangle, [{
    key: "draw",
    value: function draw() {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fillStyle"])(this.color);
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(this.x, this.y, this.width, this.height);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["stroke"])();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["fill"])();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }, {
    key: "left",
    get: function get() {
      return this.x;
    }
  }, {
    key: "right",
    get: function get() {
      return this.x + this.width;
    }
  }, {
    key: "top",
    get: function get() {
      return this.y;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.y + this.height;
    }
  }]);

  return Rectangle;
}();

function init() {
  animate.entities = [];

  for (var i = 0; i < 4; i++) {
    animate.entities.push(new Circle(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(0, _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].width), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["randomIntFromRange"])(0, _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].height), 10, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["randomColor"])(colors)));
  }
}

function animate() {
  //requestAnimationFrame(animate)
  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].clearRect(0, 0, _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].width, _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].height);
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["background"])('#000');
  var qTree = new _quadtree__WEBPACK_IMPORTED_MODULE_3__["default"](new Rectangle(0, 0, _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].width, _canvas__WEBPACK_IMPORTED_MODULE_1__["canvas"].height), 4);

  for (var i = 0; i < animate.entities.length; i++) {
    qTree.insert(animate.entities[i]);
  }
}

init();
animate();

/***/ }),

/***/ "./src/js/quadtree.js":
/*!****************************!*\
  !*** ./src/js/quadtree.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuadTree; });
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/js/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var QuadTree = /*#__PURE__*/function () {
  function QuadTree(boundary, capacity) {
    _classCallCheck(this, QuadTree);

    console.log(boundary);
    this.x = boundary.x, this.y = boundary.y, this.width = boundary.width, this.height = boundary.height;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
  }

  _createClass(QuadTree, [{
    key: "subdivide",
    value: function subdivide() {
      this.northEast = new QuadTree(new _index__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](this.x + this.width / 2, this.y, this.width / 2, this.height / 2), this.capacity);
      this.southEast = new QuadTree(new _index__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](this.x + this.width / 2, this.y + this.height / 2, this.width / 2, this.height / 2), this.capacity);
      this.northWest = new QuadTree(new _index__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](this.x, this.y, this.width / 2, this.height / 2), this.capacity);
      this.southWest = new QuadTree(new _index__WEBPACK_IMPORTED_MODULE_2__["Rectangle"](this.x, this.y + this.height / 2, this.width / 2, this.height / 2), this.capacity);
      this.divided = true;
    }
  }, {
    key: "insert",
    value: function insert(point) {
      if (this.points.length < this.capacity) this.points.push(point);else {
        if (!this.divided) this.subdivide();
        this.northEast.insert(point);
        this.northEast.insert(point);
        this.southWest.insert(point);
        this.southWest.insert(point);
      }
    }
  }, {
    key: "show",
    value: function show() {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["strokeStyle"])('#fff');
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fillStyle"])('rgba(0,0,0,0)');
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_0__["rectangle"])(this.x, this.y, this.width, this.height);
      this.points.draw();

      if (this.divided) {
        this.northWest.show();
        this.northEast.show();
        this.southWest.show();
        this.southEast.show();
      }

      stroke();
    }
  }]);

  return QuadTree;
}();



/***/ }),

/***/ "./src/js/utils/draw.js":
/*!******************************!*\
  !*** ./src/js/utils/draw.js ***!
  \******************************/
/*! exports provided: circle, rectangle, rotateRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangle", function() { return rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRect", function() { return rotateRect; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/js/canvas.js");

function circle(x, y, radius) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].arc(x, y, radius, 0, Math.PI * 2, false);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
}
function rectangle(x, y, width, height) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rect(x, y, width, height);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
}
function rotateRect() {}

/***/ }),

/***/ "./src/js/utils/formulas.js":
/*!**********************************!*\
  !*** ./src/js/utils/formulas.js ***!
  \**********************************/
/*! exports provided: pythagoras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pythagoras", function() { return pythagoras; });
var pythagoras = function pythagoras(dx, dy) {
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/*! exports provided: randomIntFromRange, randomColor, distance, background, fillStyle, strokeStyle, fill, stroke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomIntFromRange", function() { return randomIntFromRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillStyle", function() { return fillStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeStyle", function() { return strokeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stroke", function() { return stroke; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/js/canvas.js");
/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulas */ "./src/js/utils/formulas.js");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw */ "./src/js/utils/draw.js");



var randomIntFromRange = function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var randomColor = function randomColor(colors) {
  return colors[Math.floor(Math.random() * randomIntFromRange(0, colors.length))];
};
var distance = function distance(x1, x2, y1, y2) {
  return Object(_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(x1 - x2, y1 - y2);
};
var background = function background(color) {
  return fillStyle(color), Object(_draw__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(0, 0, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height), fill();
};
var fillStyle = function fillStyle(color) {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = color;
};
var strokeStyle = function strokeStyle(color) {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = color;
};
var fill = function fill() {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
};
var stroke = function stroke() {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
};

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map