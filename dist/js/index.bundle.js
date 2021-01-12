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

/***/ "./src/js/Collision/correction.js":
/*!****************************************!*\
  !*** ./src/js/Collision/correction.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return correctPosition; });
/* harmony import */ var _utils_formulas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/formulas */ "./src/js/utils/formulas.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
// Need to research impulses, to build a sequential impulse solver
// 'physics engine it would be handled by the contraint solver. 
// ...one of the easiest to understand is a sequential impulse solver.'


function correctPosition(ent1, ent2, collisionData) {
  var _collisionData$point;

  var collidee = ent1.physics === 'STATIC' ? ent2.physics === 'STATIC' ? undefined : ent2 : ent1;
  if (!collidee) return;
  var collisionPoint = (_collisionData$point = collisionData.point) !== null && _collisionData$point !== void 0 ? _collisionData$point : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["getClosestPoint"])(collidee.pos, collisionData.points),
      overlap = collidee.radius - Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["distance"])(collidee.pos.x, collisionPoint.x, collidee.pos.y, collisionPoint.y),
      angle = Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_0__["atanAngle"])(collidee.pos.x - collisionPoint.x, collidee.pos.y - collisionPoint.y);
  collidee.pos.add({
    x: overlap * Math.cos(angle),
    y: overlap * Math.sin(angle)
  });
}

/***/ }),

/***/ "./src/js/Collision/detection.js":
/*!***************************************!*\
  !*** ./src/js/Collision/detection.js ***!
  \***************************************/
/*! exports provided: FORM, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM", function() { return FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return detectCollision; });
/* harmony import */ var _Strutures_Entities_types_Segment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Strutures/Entities/types/Segment */ "./src/js/Strutures/Entities/types/Segment.js");
/* harmony import */ var _Strutures_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strutures/Vector */ "./src/js/Strutures/Vector.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _utils_formulas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/formulas */ "./src/js/utils/formulas.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/**
 * 
 * Useful source for extended collision detection
 * https://github.com/davidfig/intersects
 * 
 */

var FORM = {
  AABB: 'AABB',
  CIRCLE: 'CIRCLE',
  POINT: 'POINT',
  POLYGON: 'POLYGON',
  RECTANGLE: 'RECTANGLE',
  SEGMENT: 'SEGMENT'
};
function detectCollision(ent1, ent2, debug) {
  var _result$points;

  var errorMessage = ['Collider: NOT A VALID FORM', 'Collidee: NOT A VALID FORM'],
      result = ent1.form === FORM.AABB ? ent2.form === FORM.AABB ? detectAABB(ent1, ent2) : ent2.form === FORM.CIRCLE ? detectPolygonCircle(ent1, ent2) : ent2.form === FORM.POINT ? detectAABBPoint(ent1, ent2) : ent2.form === FORM.POLYGON ? detectPolygon(ent1, ent2) : ent2.form === FORM.RECTANGLE ? detectPolygon(ent1, ent2) : ent2.form === FORM.SEGMENT ? detectPolygonLine(ent1, ent2) : errorMessage[1] : ent1.form === FORM.CIRCLE ? ent2.form === FORM.AABB ? detectPolygonCircle(ent2, ent1) : ent2.form === FORM.CIRCLE ? detectCircle(ent1, ent2) : ent2.form === FORM.POINT ? detectCirclePoint(ent1, ent2) : ent2.form === FORM.POLYGON ? detectPolygonCircle(ent2, ent1) : ent2.form === FORM.RECTANGLE ? detectPolygonCircle(ent2, ent1) : ent2.form === FORM.SEGMENT ? detectLineCircle(ent2, ent1) : errorMessage[1] : ent1.form === FORM.POINT ? ent2.form === FORM.AABB ? detectPolygonPoint(ent2, ent1) : ent2.form === FORM.CIRCLE ? detectCirclePoint(ent2, ent1) : ent2.form === FORM.POINT ? detectPoint(ent1, ent2) : ent2.form === FORM.POLYGON ? detectPolygonPoint(ent2, ent1) : ent2.form === FORM.RECTANGLE ? detectPolygonPoint(ent2, ent1) : ent2.form === FORM.SEGMENT ? detectPolygonPoint(ent2, ent1) : errorMessage[1] : ent1.form === FORM.POLYGON ? ent2.form === FORM.AABB ? detectPolygon(ent1, ent2) : ent2.form === FORM.CIRCLE ? detectPolygonCircle(ent1, ent2) : ent2.form === FORM.POINT ? detectPolygonPoint(ent1, ent2) : ent2.form === FORM.POLYGON ? detectPolygon(ent1, ent2) : ent2.form === FORM.RECTANGLE ? detectPolygon(ent1, ent2) : ent2.form === FORM.SEGMENT ? detectPolygonLine(ent1, ent2) : errorMessage[1] : ent1.form === FORM.RECTANGLE ? ent2.form === FORM.AABB ? detectPolygon(ent1, ent2) : ent2.form === FORM.CIRCLE ? detectPolygonCircle(ent1, ent2) : ent2.form === FORM.POINT ? detectPolygonPoint(ent1, ent2) : ent2.form === FORM.POLYGON ? detectPolygon(ent1, ent2) : ent2.form === FORM.RECTANGLE ? detectPolygon(ent1, ent2) : ent2.form === FORM.SEGMENT ? detectPolygonLine(ent1, ent2) : errorMessage[1] : ent1.form === FORM.SEGMENT ? ent2.form === FORM.AABB ? detectPolygonLine(ent2, ent1) : ent2.form === FORM.CIRCLE ? detectLineCircle(ent1, ent2) : ent2.form === FORM.POINT ? detectLinePoint(ent1, ent2) : ent2.form === FORM.POLYGON ? detectPolygonLine(ent2, ent1) : ent2.form === FORM.RECTANGLE ? detectPolygonLine(ent2, ent1) : ent2.form === FORM.SEGMENT ? detectLine(ent1, ent2) : errorMessage[1] : errorMessage[0];
  debug && (result === null || result === void 0 ? void 0 : result.point) && (Object(_utils_draw__WEBPACK_IMPORTED_MODULE_2__["point"])(result.point.x, result.point.y, 5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["fill"])('red'));
  debug && (result === null || result === void 0 ? void 0 : (_result$points = result.points) === null || _result$points === void 0 ? void 0 : _result$points.length) && result.points.forEach(function (p) {
    return Object(_utils_draw__WEBPACK_IMPORTED_MODULE_2__["point"])(p.x, p.y, 5), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["fill"])('red');
  });
  return result;
}

var detectPoint = function detectPoint(p1, p2) {
  return p1.pos.x - p2.pos.x === 0 && p1.pos.y - p2.pos.y === 0;
};

var detectAABBPoint = function detectAABBPoint(r, p) {
  return r.pos.x <= p.x && p.x <= r.pos.x + r.width && r.pos.y <= p.y && p.y <= r.pos.y + r.height;
};

var detectCircle = function detectCircle(c1, c2) {
  var d = {
    x: c1.pos.x - c2.pos.x,
    y: c1.pos.y - c2.pos.y
  };
  return Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_3__["pythagoras"])(d.x, d.y) < c1.radius + c2.radius ? {
    type: 'INTERSECTING',
    point: {
      x: c1.pos.x + d.x / 2,
      y: c1.pos.y - d.y / 2
    }
  } : {
    type: 'NONE'
  };
};

var detectCirclePoint = function detectCirclePoint(c1, p) {
  var _p$x, _p$y;

  return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(c1.pos.x, (_p$x = p.x) !== null && _p$x !== void 0 ? _p$x : p.pos.x, c1.pos.y, (_p$y = p.y) !== null && _p$y !== void 0 ? _p$y : p.pos.y) < c1.radius;
};

var detectAABB = function detectAABB(r1, r2) {
  return r1.pos.x + r1.width >= r2.pos.x && r1.pos.x <= r2.pos.x + r2.width && r1.pos.y + r1.height >= r2.pos.y && r1.pos.y <= r2.pos.y + r2.height;
};

var detectLine = function detectLine(l1, l2) {
  // https://github.com/psalaets/line-intersect/blob/master/src/check-intersection.js
  // For an explination, checkout - https://www.youtube.com/watch?v=A86COO8KC58&t=56s
  // utilizes the standard formula 
  // Ax + By = C
  var TYPE = {
    COLINEAR: 'COLINEAR',
    PARALLEL: 'PARALLEL',
    NONE: 'NONE',
    INTERSECTING: 'INTERSECTING',
    INTERSECT_EDGE: 'INTERSECT_EDGE'
  },
      x1 = l1.pos1.x,
      y1 = l1.pos1.y,
      x2 = l1.pos2.x,
      y2 = l1.pos2.y,
      a1 = y2 - y1,
      b1 = x2 - x1,
      x3 = l2.pos1.x,
      y3 = l2.pos1.y,
      x4 = l2.pos2.x,
      y4 = l2.pos2.y,
      a2 = y4 - y3,
      b2 = x4 - x3,
      denom = a2 * b1 - b2 * a1,
      numeA = b2 * (y1 - y3) - a2 * (x1 - x3),
      numeB = b1 * (y1 - y3) - a1 * (x1 - x3);
  if (denom == 0) return numeA == 0 && numeB == 0 ? {
    type: TYPE.COLINEAR
  } : {
    type: TYPE.PARALLEL
  };
  var uA = numeA / denom,
      uB = numeB / denom;
  return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1 ? {
    type: uA === 0 | uA === 1 || uB === 0 | uB === 1 ? TYPE.INTERSECT_EDGE : TYPE.INTERSECTING,
    point: {
      x: x1 + uA * b1,
      y: y1 + uA * a1
    }
  } : {
    type: TYPE.NONE
  };
};

var detectLinePoint = function detectLinePoint(l, p) {
  var _p$x2, _p$y2, _p$x3, _p$y3;

  return l.length >= Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])(l.pos1.x, (_p$x2 = p.x) !== null && _p$x2 !== void 0 ? _p$x2 : p.pos.x, l.pos1.y, (_p$y2 = p.y) !== null && _p$y2 !== void 0 ? _p$y2 : p.pos.y) + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["distance"])((_p$x3 = p.x) !== null && _p$x3 !== void 0 ? _p$x3 : p.pos.x, l.pos2.x, (_p$y3 = p.y) !== null && _p$y3 !== void 0 ? _p$y3 : p.pos.y, l.pos2.y);
};

var detectLineCircle = function detectLineCircle(l, c) {
  var x1 = l.pos1.x,
      y1 = l.pos1.y,
      x2 = l.pos2.x,
      y2 = l.pos2.y,
      dx = x2 - x1,
      dy = y2 - y1,
      cx = c.pos.x,
      cy = c.pos.y,
      len = l.length,
      dot = ((cx - x1) * dx + (cy - y1) * dy) / (len * len),
      point = {
    x: x1 + dot * (x2 - x1),
    y: y1 + dot * (y2 - y1)
  };
  return detectLinePoint(l, point) && detectCirclePoint(c, point) ? {
    type: 'INTERSECTING',
    point: point
  } : detectCirclePoint(c, l.pos1) ? {
    type: 'INTERSECTING',
    point: l.pos1
  } : detectCirclePoint(c, l.pos2) ? {
    type: 'INTERSECTING',
    point: l.pos2
  } : {
    type: 'NONE'
  };
};

var detectPolygon = function detectPolygon(poly1, poly2) {
  poly1 = poly1.points;
  var points = [];

  for (var i = 0; i < poly1.length; i++) {
    var b1 = poly1[i];
    var b2 = poly1[(i + 1) % poly1.length];
    var res = detectPolygonLine(poly2, new _Strutures_Entities_types_Segment__WEBPACK_IMPORTED_MODULE_0__["default"]({
      pos1: b1,
      pos2: b2
    }));
    res.type === 'INTERSECTING' && points.push.apply(points, _toConsumableArray(res.points));
  }

  return !points.length ? {
    type: 'NONE'
  } : {
    type: 'INTERSECTING',
    points: points
  };
};

var detectPolygonPoint = function detectPolygonPoint(poly, p) {
  var _p$x4, _p$y4, _p$pos;

  var l = new _Strutures_Entities_types_Segment__WEBPACK_IMPORTED_MODULE_0__["default"]({
    pos1: new _Strutures_Vector__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
    pos2: new _Strutures_Vector__WEBPACK_IMPORTED_MODULE_1__["default"]((_p$x4 = p.x) !== null && _p$x4 !== void 0 ? _p$x4 : p.pos.x, (_p$y4 = p.y) !== null && _p$y4 !== void 0 ? _p$y4 : p.pos.y)
  }),
      res = detectPolygonLine(poly, l);
  return res.type === 'NONE' ? res : res.type === 'INTERSECTING' && res.points.length % 2 ? {
    type: res.type,
    point: (_p$pos = p === null || p === void 0 ? void 0 : p.pos) !== null && _p$pos !== void 0 ? _p$pos : p
  } : _objectSpread(_objectSpread({}, res), {}, {
    type: 'NONE'
  });
};

var detectPolygonLine = function detectPolygonLine(poly, line) {
  poly = poly.points;
  var points = [];

  for (var i = 0; i < poly.length; i++) {
    var b1 = poly[i];
    var b2 = poly[(i + 1) % poly.length];
    var res = detectLine(line, new _Strutures_Entities_types_Segment__WEBPACK_IMPORTED_MODULE_0__["default"]({
      pos1: b1,
      pos2: b2
    }));
    res.type === 'INTERSECTING' && points.push(res.point);
  }

  if (points.length < 2) {
    // Covers "edgecases"
    poly.forEach(function (p) {
      return detectLinePoint(line, p) && points.push(p);
    }); // Covers lines inside polygon, however not a viable solution sonsidering polygon-polygon detection

    /* points.length < 2 && detectPolygonPoint(poly, line.pos1) && points.push(line.pos1)
    points.length < 2 && detectPolygonPoint(poly, line.pos2) && points.push(line.pos2) */
  }

  return !points.length ? {
    type: 'NONE'
  } : {
    type: 'INTERSECTING',
    points: points
  };
};

var detectPolygonCircle = function detectPolygonCircle(poly, c) {
  poly = poly.points;
  var points = [];

  for (var i = 0; i < poly.length; i++) {
    var b1 = poly[i];
    var b2 = poly[(i + 1) % poly.length];
    var res = detectLineCircle(new _Strutures_Entities_types_Segment__WEBPACK_IMPORTED_MODULE_0__["default"]({
      pos1: b1,
      pos2: b2
    }), c);
    if (res.type === 'INTERSECTING') points.push(res.point);
  }

  return !points.length ? {
    type: 'NONE'
  } : {
    type: 'INTERSECTING',
    points: points
  };
};

var detectRectanglePoint = function detectRectanglePoint(r, p) {
  return detectPolygonPoint(r, p);
};

var detectRectangle = function detectRectangle(r1, r2) {
  return detectAABB(r1.AABB(), r2.AABB()) && detectPolygon(r1, r2);
};

var detectRectangleCircle = function detectRectangleCircle(r, c) {
  return detectPolygonCircle(r, c);
};

/***/ }),

/***/ "./src/js/Collision/resolve.js":
/*!*************************************!*\
  !*** ./src/js/Collision/resolve.js ***!
  \*************************************/
/*! exports provided: FORM, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM", function() { return FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resolveCollision; });
/* harmony import */ var _Strutures_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Strutures/Vector */ "./src/js/Strutures/Vector.js");
/* harmony import */ var _utils_formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/formulas */ "./src/js/utils/formulas.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");



var FORM = {
  AABB: 'AABB',
  CIRCLE: 'CIRCLE',
  POINT: 'POINT',
  POLYGON: 'POLYGON',
  RECTANGLE: 'RECTANGLE',
  SEGMENT: 'SEGMENT'
};
function resolveCollision(ent1, ent2, collisionData) {
  var errorMessage = ['Collider: NOT A VALID FORM', 'Collidee: NOT A VALID FORM'],
      result = ent1.form === FORM.CIRCLE ? ent2.form === FORM.SEGMENT ? resolveLineCircle(ent2, ent1, collisionData) : ent2.form === FORM.RECTANGLE ? resolveLineCircle(ent2, ent1, collisionData) : ent2.form === FORM.CIRCLE ? resolveCircle(ent1, ent2, collisionData) : errorMessage[1] : errorMessage[0];
  return result;
}

var resolveCircle = function resolveCircle(c1, c2) {
  var vel = calcCollision.circle(c1, c2);
  c1.vel = vel.c1;
  c2.vel = vel.c2;
};

var resolveLineCircle = function resolveLineCircle(l, c, collisionData) {
  var _collisionData$point;

  var vel = calcCollision.lineCircle(l, c, (_collisionData$point = collisionData.point) !== null && _collisionData$point !== void 0 ? _collisionData$point : Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getClosestPoint"])(c.pos, collisionData.points));
  l.vel = vel.l;
  c.vel = vel.c;
  c.vel.mult(1);
};

var calcCollision = {
  circle: function circle(c1, c2) {
    var angle = {
      c1: Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["atanAngle"])(c1.vel.x, c1.vel.y),
      c2: Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["atanAngle"])(c2.vel.x, c2.vel.y),
      contact: Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["atanAngle"])(c1.pos.x - c2.pos.x, c1.pos.y - c2.pos.y)
    };
    return {
      c1: twoMovingEntitesCollisionVelocityResolution(c1.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(c1.vel.x, c1.vel.y), angle.c1, c2.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(c2.vel.x, c2.vel.y), angle.c2, angle.contact),
      c2: twoMovingEntitesCollisionVelocityResolution(c2.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(c2.vel.x, c2.vel.y), angle.c2, c1.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(c1.vel.x, c1.vel.y), angle.c1, angle.contact)
    };
  },
  lineCircle: function lineCircle(l, c, p) {
    var angle = {
      l: Math.atan2(l.vel.y, l.vel.x),
      c: Math.atan2(c.vel.y, c.vel.x),
      contact: Math.atan2(p.y - c.pos.y, p.x - c.pos.x)
    };
    return {
      l: twoMovingEntitesCollisionVelocityResolution(l.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(l.vel.x, l.vel.y), angle.l, c.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(c.vel.x, c.vel.y), angle.c, angle.contact),
      c: twoMovingEntitesCollisionVelocityResolution(c.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(c.vel.x, c.vel.y), angle.c, l.mass, Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(l.vel.x, l.vel.y), angle.l, angle.contact)
    };
  }
};

var twoMovingEntitesCollisionVelocityResolution = function twoMovingEntitesCollisionVelocityResolution(m1, v1, o1, m2, v2, o2, c) {
  return new _Strutures_Vector__WEBPACK_IMPORTED_MODULE_0__["default"]((v1 * Math.cos(o1 - c) * (m1 - m2) + 2 * m2 * v2 * Math.cos(o2 - c)) / (m1 + m2) * Math.cos(c) + v1 * Math.sin(o1 - c) * Math.cos(c + Math.PI / 2), (v1 * Math.cos(o1 - c) * (m1 - m2) + 2 * m2 * v2 * Math.cos(o2 - c)) / (m1 + m2) * Math.sin(c) + v1 * Math.sin(o1 - c) * Math.sin(c + Math.PI / 2));
};

/***/ }),

/***/ "./src/js/Strutures/Edges.js":
/*!***********************************!*\
  !*** ./src/js/Strutures/Edges.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edges; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/js/canvas.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entities/types/AABB */ "./src/js/Strutures/Entities/types/AABB.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Edges = /*#__PURE__*/function () {
  function Edges() {
    _classCallCheck(this, Edges);

    this.width = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width;
    this.height = _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height;
    this.bottom = new _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_2__["default"]({
      x: 0,
      y: this.height - 20,
      width: this.width,
      height: 20,
      apperance: {
        color: 'grey'
      }
    });
    this.left = new _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_2__["default"]({
      x: 0,
      y: 0,
      width: 20,
      height: this.height,
      apperance: {
        color: 'grey'
      }
    });
    this.right = new _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_2__["default"]({
      x: this.width - 20,
      y: 0,
      width: 20,
      height: this.height,
      apperance: {
        color: 'grey'
      }
    });
  }

  _createClass(Edges, [{
    key: "show",
    value: function show() {
      this.bottom && (this.bottom.show(), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(this.bottom.color));
      this.left && (this.left.show(), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(this.left.color));
      this.right && (this.right.show(), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["fill"])(this.right.color));
    }
  }, {
    key: "update",
    value: function update(entities) {
      var _this = this;

      entities.forEach(function (entity) {
        if (entity.bottom >= _this.bottom.top) {
          entity.vel.y *= -1;
          entity.friction(_this.bottom);
        }

        if (entity.right >= _this.right.left) {
          entity.vel.x *= -1;
          entity.friction(_this.right);
        } else if (entity.left <= _this.left.right) {
          entity.vel.x *= -1;
          entity.friction(_this.left);
        }
      });
    }
  }]);

  return Edges;
}();



/***/ }),

/***/ "./src/js/Strutures/Entities/Entity.js":
/*!*********************************************!*\
  !*** ./src/js/Strutures/Entities/Entity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
/* harmony import */ var _Collision_correction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Collision/correction */ "./src/js/Collision/correction.js");
/* harmony import */ var _Collision_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Collision/detection */ "./src/js/Collision/detection.js");
/* harmony import */ var _Collision_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Collision/resolve */ "./src/js/Collision/resolve.js");
/* harmony import */ var _preset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../preset */ "./src/js/preset.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Vector */ "./src/js/Strutures/Vector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Entity = /*#__PURE__*/function () {
  function Entity(_ref) {
    var pos = _ref.pos,
        x = _ref.x,
        y = _ref.y,
        vel = _ref.vel,
        vx = _ref.vx,
        vy = _ref.vy,
        acc = _ref.acc,
        ax = _ref.ax,
        ay = _ref.ay,
        mass = _ref.mass,
        physics = _ref.physics;

    _classCallCheck(this, Entity);

    this.pos = pos !== null && pos !== void 0 ? pos : new _Vector__WEBPACK_IMPORTED_MODULE_4__["default"](x, y);
    this.vel = vel !== null && vel !== void 0 ? vel : new _Vector__WEBPACK_IMPORTED_MODULE_4__["default"](vx, vy);
    this.acc = acc !== null && acc !== void 0 ? acc : new _Vector__WEBPACK_IMPORTED_MODULE_4__["default"](ax, ay);
    this.mass = mass !== null && mass !== void 0 ? mass : 1;
    this.physics = physics || PHYSICS.DYNAMIC;
  }

  _createClass(Entity, [{
    key: "applyForce",
    value: function applyForce(force) {
      this.acc.add(_Vector__WEBPACK_IMPORTED_MODULE_4__["default"].div(force, this.mass));
    }
  }, {
    key: "gravity",
    value: function gravity() {
      this.applyForce(new _Vector__WEBPACK_IMPORTED_MODULE_4__["default"](0, _preset__WEBPACK_IMPORTED_MODULE_3__["default"].physics.constants.g).mult(this.mass));
    }
  }, {
    key: "friction",
    value: function friction(entity) {
      if (!entity) return;
      var mu = 0.1,
          angle = entity.angle || 0,
          normal = this.force.y * this.mass,
          friction = this.vel.copy().setMag(-1).rotate(-angle).setMag(mu * normal);
      this.applyForce(friction);
    }
  }, {
    key: "intersects",
    value: function intersects(entity, debug) {
      return Object(_Collision_detection__WEBPACK_IMPORTED_MODULE_1__["default"])(this, entity, debug);
    }
  }, {
    key: "collision",
    value: function collision(entity, collisionData) {
      this.friction(entity);
      Object(_Collision_resolve__WEBPACK_IMPORTED_MODULE_2__["default"])(this, entity, collisionData);
      Object(_Collision_correction__WEBPACK_IMPORTED_MODULE_0__["default"])(this, entity, collisionData);
    }
  }, {
    key: "force",
    get: function get() {
      return this.acc.copy().mult(this.mass);
    }
  }]);

  return Entity;
}();


var PHYSICS = {
  STATIC: 'STATIC',
  DYNAMIC: 'DYNAMIC'
};
Entity.prototype.PHYSICS = PHYSICS;

/***/ }),

/***/ "./src/js/Strutures/Entities/types/AABB.js":
/*!*************************************************!*\
  !*** ./src/js/Strutures/Entities/types/AABB.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AABB; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ "./src/js/Strutures/Entities/Entity.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _Collision_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Collision/detection */ "./src/js/Collision/detection.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var AABB = /*#__PURE__*/function (_Entity) {
  _inherits(AABB, _Entity);

  var _super = _createSuper(AABB);

  function AABB(_ref) {
    var _this;

    var width = _ref.width,
        height = _ref.height,
        _ref$apperance = _ref.apperance,
        apperance = _ref$apperance === void 0 ? {} : _ref$apperance,
        parent = _objectWithoutProperties(_ref, ["width", "height", "apperance"]);

    _classCallCheck(this, AABB);

    _this = _super.call(this, parent);
    _this.form = _Collision_detection__WEBPACK_IMPORTED_MODULE_2__["FORM"].AABB;
    _this.width = width !== null && width !== void 0 ? width : Math.sqrt(_this.mass) * 20;
    _this.height = height !== null && height !== void 0 ? height : Math.sqrt(_this.mass) * 20;
    _this.color = apperance.color || '#fff';
    return _this;
  }

  _createClass(AABB, [{
    key: "contains",
    value: function contains(point) {
      return Object(_Collision_detection__WEBPACK_IMPORTED_MODULE_2__["default"])(this, point);
    }
  }, {
    key: "show",
    value: function show() {
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_1__["rectangle"])(this.pos.x, this.pos.y, this.width, this.height);
    }
  }, {
    key: "halfWidth",
    get: function get() {
      return this.width / 2;
    }
  }, {
    key: "halfHeight",
    get: function get() {
      return this.height / 2;
    }
  }, {
    key: "left",
    get: function get() {
      return this.pos.x;
    }
  }, {
    key: "right",
    get: function get() {
      return this.pos.x + this.width;
    }
  }, {
    key: "top",
    get: function get() {
      return this.pos.y;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.pos.y + this.height;
    }
  }, {
    key: "middleX",
    get: function get() {
      return this.pos.x + this.halfWidth;
    }
  }, {
    key: "middleY",
    get: function get() {
      return this.pos.y + this.halfHeight;
    }
  }, {
    key: "points",
    get: function get() {
      return [{
        x: this.left,
        y: this.top
      }, {
        x: this.right,
        y: this.top
      }, {
        x: this.right,
        y: this.bottom
      }, {
        x: this.left,
        y: this.bottom
      }];
    }
  }]);

  return AABB;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/Strutures/Entities/types/Circle.js":
/*!***************************************************!*\
  !*** ./src/js/Strutures/Entities/types/Circle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ "./src/js/Strutures/Entities/Entity.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Vector */ "./src/js/Strutures/Vector.js");
/* harmony import */ var _Collision_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Collision/detection */ "./src/js/Collision/detection.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Circle = /*#__PURE__*/function (_Entity) {
  _inherits(Circle, _Entity);

  var _super = _createSuper(Circle);

  function Circle(_ref) {
    var _apperance$color, _apperance$strokeWeig;

    var _this;

    var _ref$apperance = _ref.apperance,
        apperance = _ref$apperance === void 0 ? {} : _ref$apperance,
        parent = _objectWithoutProperties(_ref, ["apperance"]);

    _classCallCheck(this, Circle);

    _this = _super.call(this, parent);
    _this.form = _Collision_detection__WEBPACK_IMPORTED_MODULE_3__["FORM"].CIRCLE;
    _this.radius = Math.sqrt(_this.mass) * 10;
    _this.color = (_apperance$color = apperance.color) !== null && _apperance$color !== void 0 ? _apperance$color : '#fff';
    _this.strokeWeight = (_apperance$strokeWeig = apperance.strokeWeight) !== null && _apperance$strokeWeig !== void 0 ? _apperance$strokeWeig : _this.radius * .2;
    return _this;
  }

  _createClass(Circle, [{
    key: "update",
    value: function update() {
      if (this.physics === this.PHYSICS.DYNAMIC) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc = new _Vector__WEBPACK_IMPORTED_MODULE_2__["default"]();
      }
    }
  }, {
    key: "show",
    value: function show() {
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_1__["ellipse"])(this.pos.x, this.pos.y, this.radius);
    }
  }, {
    key: "left",
    get: function get() {
      return this.pos.x - this.radius;
    }
  }, {
    key: "right",
    get: function get() {
      return this.pos.x + this.radius;
    }
  }, {
    key: "top",
    get: function get() {
      return this.pos.y - this.radius;
    }
  }, {
    key: "bottom",
    get: function get() {
      return this.pos.y + this.radius;
    }
  }]);

  return Circle;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/Strutures/Entities/types/Point.js":
/*!**************************************************!*\
  !*** ./src/js/Strutures/Entities/types/Point.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ "./src/js/Strutures/Entities/Entity.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _Collision_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Collision/detection */ "./src/js/Collision/detection.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Point = /*#__PURE__*/function (_Entity) {
  _inherits(Point, _Entity);

  var _super = _createSuper(Point);

  function Point(_ref) {
    var _this;

    var _ref$apperance = _ref.apperance,
        apperance = _ref$apperance === void 0 ? {} : _ref$apperance,
        parent = _objectWithoutProperties(_ref, ["apperance"]);

    _classCallCheck(this, Point);

    _this = _super.call(this, parent);
    _this.form = _Collision_detection__WEBPACK_IMPORTED_MODULE_3__["FORM"].POINT;
    _this.strokeWeight = apperance.strokeWeight || 3;
    _this.color = apperance.color || '#fff';
    return _this;
  }

  _createClass(Point, [{
    key: "show",
    value: function show() {
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_1__["point"])(this.pos.x, this.pos.y, this.strokeWeight);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fill"])(this.color);
    }
  }]);

  return Point;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/Strutures/Entities/types/Polygon.js":
/*!****************************************************!*\
  !*** ./src/js/Strutures/Entities/types/Polygon.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
/* harmony import */ var _Collision_detection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Collision/detection */ "./src/js/Collision/detection.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Entity */ "./src/js/Strutures/Entities/Entity.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Polygon = /*#__PURE__*/function (_Entity) {
  _inherits(Polygon, _Entity);

  var _super = _createSuper(Polygon);

  function Polygon(_ref) {
    var _this;

    var points = _ref.points,
        _ref$apperance = _ref.apperance,
        apperance = _ref$apperance === void 0 ? {} : _ref$apperance,
        parent = _objectWithoutProperties(_ref, ["points", "apperance"]);

    _classCallCheck(this, Polygon);

    _this = _super.call(this, parent);
    _this.form = _Collision_detection__WEBPACK_IMPORTED_MODULE_0__["FORM"].POLYGON;
    _this.origin = points.length ? points : [];
    _this.color = apperance.color || '#fff';
    return _this;
  }

  _createClass(Polygon, [{
    key: "show",
    value: function show() {
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_1__["polygon"])(this.points);
    }
  }, {
    key: "points",
    get: function get() {
      var _this2 = this;

      return this.origin.map(function (p) {
        return {
          x: p.x + _this2.pos.x,
          y: p.y + _this2.pos.y
        };
      });
    }
  }]);

  return Polygon;
}(_Entity__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/js/Strutures/Entities/types/Rectangle.js":
/*!******************************************************!*\
  !*** ./src/js/Strutures/Entities/types/Rectangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rectangle; });
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entity */ "./src/js/Strutures/Entities/Entity.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _utils_formulas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/formulas */ "./src/js/utils/formulas.js");
/* harmony import */ var _Collision_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Collision/detection */ "./src/js/Collision/detection.js");
/* harmony import */ var _AABB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AABB */ "./src/js/Strutures/Entities/types/AABB.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Vector */ "./src/js/Strutures/Vector.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/utils */ "./src/js/utils/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Rectangle = /*#__PURE__*/function (_Entity) {
  _inherits(Rectangle, _Entity);

  var _super = _createSuper(Rectangle);

  function Rectangle(_ref) {
    var _this;

    var width = _ref.width,
        height = _ref.height,
        _ref$angle = _ref.angle,
        angle = _ref$angle === void 0 ? 0 : _ref$angle,
        _ref$apperance = _ref.apperance,
        apperance = _ref$apperance === void 0 ? {} : _ref$apperance,
        parent = _objectWithoutProperties(_ref, ["width", "height", "angle", "apperance"]);

    _classCallCheck(this, Rectangle);

    _this = _super.call(this, parent);
    _this.physicv = _this.PHYSICS.DYNAMIC;
    _this.form = _Collision_detection__WEBPACK_IMPORTED_MODULE_3__["FORM"].RECTANGLE;
    _this.width = width !== null && width !== void 0 ? width : Math.sqrt(_this.mass) * 20;
    _this.height = height !== null && height !== void 0 ? height : Math.sqrt(_this.mass) * 20;
    _this.angle = Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_2__["degreeToRadian"])(-angle % 360);
    _this.color = apperance.color || '#fff';
    return _this;
  }

  _createClass(Rectangle, [{
    key: "mirror",
    value: function mirror() {
      this.angle = Math.PI - this.angle;
      return this;
    }
  }, {
    key: "AABB",
    value: function AABB() {
      var points = this.points;
      points = {
        x: points.map(function (p) {
          return p.x;
        }),
        y: points.map(function (p) {
          return p.y;
        })
      };
      var pos = new _Vector__WEBPACK_IMPORTED_MODULE_5__["default"](Math.min.apply(Math, _toConsumableArray(points.x)), Math.min.apply(Math, _toConsumableArray(points.y))),
          width = Math.abs(pos.x - Math.max.apply(Math, _toConsumableArray(points.x))),
          height = Math.abs(pos.y - Math.max.apply(Math, _toConsumableArray(points.y)));
      return new _AABB__WEBPACK_IMPORTED_MODULE_4__["default"]({
        pos: pos,
        height: height,
        width: width
      });
    }
  }, {
    key: "contains",
    value: function contains(point) {
      return detectRectanglePoint(this, point);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.physics === this.PHYSICS.DYNAMIC) {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc = new _Vector__WEBPACK_IMPORTED_MODULE_5__["default"]();
      }
    }
  }, {
    key: "show",
    value: function show() {
      /* this.points.forEach(p => (point(p.x, p.y, 5), fill('#fff')))
      point(this.middleX, this.middleY, 5), fill('#fff') */
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_1__["rotateRec"])(this.pos.x, this.pos.y, this.width, this.height, this.angle);
    }
  }, {
    key: "halfWidth",
    get: function get() {
      return this.width / 2;
    }
  }, {
    key: "halfHeight",
    get: function get() {
      return this.height / 2;
    }
  }, {
    key: "middleX",
    get: function get() {
      return this.pos.x + Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_2__["stdRotationFormula"])(this.halfWidth, this.halfHeight, Math.PI * 2 - this.angle).x;
    }
  }, {
    key: "middleY",
    get: function get() {
      return this.pos.y + Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_2__["stdRotationFormula"])(this.halfWidth, this.halfHeight, Math.PI * 2 - this.angle).y;
    }
  }, {
    key: "points",
    get: function get() {
      var offsets = {
        tr: Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_2__["stdRotationFormula"])(this.width, 0, Math.PI * 2 - this.angle),
        bl: Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_2__["stdRotationFormula"])(1, this.height, Math.PI * 2 - this.angle),
        br: Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_2__["stdRotationFormula"])(this.width, this.height, Math.PI * 2 - this.angle)
      };
      return [{
        x: this.pos.x,
        y: this.pos.y
      }, {
        x: this.pos.x + offsets.tr.x,
        y: this.pos.y + offsets.tr.y
      }, {
        x: this.pos.x + offsets.br.x,
        y: this.pos.y + offsets.br.y
      }, {
        x: this.pos.x + offsets.bl.x,
        y: this.pos.y + offsets.bl.y
      }];
    }
  }]);

  return Rectangle;
}(_Entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/js/Strutures/Entities/types/Segment.js":
/*!****************************************************!*\
  !*** ./src/js/Strutures/Entities/types/Segment.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Segment; });
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Vector */ "./src/js/Strutures/Vector.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _Collision_detection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Collision/detection */ "./src/js/Collision/detection.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Segment = /*#__PURE__*/function () {
  function Segment(_ref) {
    var pos1 = _ref.pos1,
        x1 = _ref.x1,
        y1 = _ref.y1,
        pos2 = _ref.pos2,
        x2 = _ref.x2,
        y2 = _ref.y2,
        vel = _ref.vel,
        vx = _ref.vx,
        vy = _ref.vy,
        mass = _ref.mass,
        _ref$apperance = _ref.apperance,
        apperance = _ref$apperance === void 0 ? {} : _ref$apperance;

    _classCallCheck(this, Segment);

    this.form = _Collision_detection__WEBPACK_IMPORTED_MODULE_3__["FORM"].SEGMENT;
    this.pos1 = pos1 || new _Vector__WEBPACK_IMPORTED_MODULE_1__["default"](x1, y1);
    this.pos2 = pos2 || new _Vector__WEBPACK_IMPORTED_MODULE_1__["default"](x2, y2);
    this.vel = vel || new _Vector__WEBPACK_IMPORTED_MODULE_1__["default"](vx, vy);
    this.mass = mass || 1;
    this.color = apperance.color || '#fff';
    this.strokeWeight = apperance.strokeWeight || 1;
  }

  _createClass(Segment, [{
    key: "mirror",
    value: function mirror() {
      var p = this.pos1;
      this.pos1 = this.pos2;
      this.pos2 = p;
      return this;
    }
  }, {
    key: "intersects",
    value: function intersects(entity, debug) {
      return Object(_Collision_detection__WEBPACK_IMPORTED_MODULE_3__["default"])(this, entity, debug);
    }
  }, {
    key: "gravity",
    value: function gravity() {}
  }, {
    key: "friction",
    value: function friction() {}
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "collision",
    value: function collision() {}
  }, {
    key: "show",
    value: function show() {
      Object(_utils_draw__WEBPACK_IMPORTED_MODULE_0__["line"])(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
    }
  }, {
    key: "angle",
    get: function get() {
      return Math.atan2(this.pos2.y - this.pos1.y, this.pos2.x - this.pos1.x);
    }
  }, {
    key: "length",
    get: function get() {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["distance"])(this.pos1.x, this.pos2.x, this.pos1.y, this.pos2.y);
    }
  }]);

  return Segment;
}();



/***/ }),

/***/ "./src/js/Strutures/QuadTree.js":
/*!**************************************!*\
  !*** ./src/js/Strutures/QuadTree.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuadTree; });
/* harmony import */ var _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entities/types/AABB */ "./src/js/Strutures/Entities/types/AABB.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/draw */ "./src/js/utils/draw.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vector */ "./src/js/Strutures/Vector.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var QuadTree = /*#__PURE__*/function () {
  function QuadTree(boundary, capacity) {
    _classCallCheck(this, QuadTree);

    this.boundary = boundary;
    this.capacity = capacity;
    this.entities = [];
    this.divided = false;
  }

  _createClass(QuadTree, [{
    key: "subdivide",
    value: function subdivide() {
      this.northEast = new QuadTree(new _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_0__["default"]({
        pos: _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.boundary.pos, {
          x: this.boundary.width / 2,
          y: 0
        }),
        width: this.boundary.width / 2,
        height: this.boundary.height / 2
      }), this.capacity);
      this.northWest = new QuadTree(new _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_0__["default"]({
        pos: _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.boundary.pos, {
          x: 0,
          y: 0
        }),
        width: this.boundary.halfWidth,
        height: this.boundary.halfHeight
      }), this.capacity);
      this.southEast = new QuadTree(new _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_0__["default"]({
        pos: _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.boundary.pos, {
          x: this.boundary.halfWidth,
          y: this.boundary.halfHeight
        }),
        width: this.boundary.halfWidth,
        height: this.boundary.halfHeight
      }), this.capacity);
      this.southWest = new QuadTree(new _Entities_types_AABB__WEBPACK_IMPORTED_MODULE_0__["default"]({
        pos: _Vector__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.boundary.pos, {
          x: 0,
          y: this.boundary.halfHeight
        }),
        width: this.boundary.halfWidth,
        height: this.boundary.halfHeight
      }), this.capacity);
      this.divided = true;
    }
  }, {
    key: "insert",
    value: function insert(entity) {
      if (!this.boundary.contains(entity.pos)) return false;
      if (this.entities.length < this.capacity) return this.entities.push(entity);
      !this.divided && this.subdivide();
      !this.northEast.insert(entity) && !this.northWest.insert(entity) && !this.southEast.insert(entity) && this.southWest.insert(entity);
    }
  }, {
    key: "query",
    value: function query(range) {
      var found = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!this.boundary.intersects(range)) return;else {
        var _iterator = _createForOfIteratorHelper(this.entities),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            range.contains(p.pos) && found.push(p);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (this.divided) {
          this.northEast.query(range, found);
          this.northWest.query(range, found);
          this.southEast.query(range, found);
          this.southWest.query(range, found);
        }
      }
      return found;
    }
  }, {
    key: "show",
    value: function show() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$boundarys = _ref.boundarys,
          boundarys = _ref$boundarys === void 0 ? true : _ref$boundarys,
          _ref$content = _ref.content,
          content = _ref$content === void 0 ? true : _ref$content;

      this.boundary.show();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["strokeWeight"])(1);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["stroke"])('#fff');

      if (this.divided) {
        this.northEast.show({
          boundarys: boundarys,
          content: content
        });
        this.northWest.show({
          boundarys: boundarys,
          content: content
        });
        this.southEast.show({
          boundarys: boundarys,
          content: content
        });
        this.southWest.show({
          boundarys: boundarys,
          content: content
        });
      }

      content && this.entities.length && this.entities.forEach(function (entity) {
        return entity.show(), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["fill"])(entity.color);
      });
    }
  }]);

  return QuadTree;
}();



/***/ }),

/***/ "./src/js/Strutures/Vector.js":
/*!************************************!*\
  !*** ./src/js/Strutures/Vector.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
/* harmony import */ var _utils_formulas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/formulas */ "./src/js/utils/formulas.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Vector = /*#__PURE__*/function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x !== null && x !== void 0 ? x : 0;
    this.y = y !== null && y !== void 0 ? y : 0;
  }

  _createClass(Vector, [{
    key: "add",
    value: function add(p) {
      this.x += p.x;
      this.y += p.y;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(p) {
      this.x -= p.x;
      this.y -= p.y;
      return this;
    }
  }, {
    key: "mult",
    value: function mult(scale) {
      this.x *= scale;
      this.y *= scale;
      return this;
    }
  }, {
    key: "div",
    value: function div(scale) {
      this.x /= scale;
      this.y /= scale;
      return this;
    }
  }, {
    key: "mag",
    value: function mag() {
      return Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_0__["pythagoras"])(this.x, this.y);
    }
  }, {
    key: "magSq",
    value: function magSq() {
      return Math.pow(this.mag(), 2);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      this.div(this.mag());
      return this;
    }
  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "setMag",
    value: function setMag(scale) {
      this.normalize().mult(scale);
      return this;
    }
  }, {
    key: "limit",
    value: function limit(scale) {
      this.mag() > scale && this.setMag(scale);
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      Object(_utils_formulas__WEBPACK_IMPORTED_MODULE_0__["stdRotationFormula"])(this.x, this.y, angle);
      return this;
    }
  }, {
    key: "copy",
    value: function copy() {
      return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    }
  }], [{
    key: "add",
    value: function add(p1, p2) {
      return new Vector(p1.x + p2.x, p1.y + p2.y);
    }
  }, {
    key: "sub",
    value: function sub(p1, p2) {
      return new Vector(p1.x - p2.x, p1.y - p2.y);
    }
  }, {
    key: "div",
    value: function div(p1, scale) {
      return new Vector(p1.x / scale, p1.y / scale);
    }
  }, {
    key: "mult",
    value: function mult(p1, scale) {
      return new Vector(p1.x * scale, p1.y * scale);
    }
  }, {
    key: "random",
    value: function random() {
      return new Vector(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["random"])(-100, 100) / 100, Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["random"])(-100, 100) / 100);
    }
  }]);

  return Vector;
}();



/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: canvas, ctx, mouse, colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/js/utils/utils.js");

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var mouse = {};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
canvas.width = innerWidth;
canvas.height = innerHeight;
addEventListener('mousemove', function (e) {
  var m = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getMousePosition"])(e);
  mouse.x = m[0];
  mouse.y = m[1];
});

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _Strutures_QuadTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strutures/QuadTree */ "./src/js/Strutures/QuadTree.js");
/* harmony import */ var _Strutures_Entities_types_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strutures/Entities/types/Circle */ "./src/js/Strutures/Entities/types/Circle.js");
/* harmony import */ var _Strutures_Entities_types_Rectangle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strutures/Entities/types/Rectangle */ "./src/js/Strutures/Entities/types/Rectangle.js");
/* harmony import */ var _Strutures_Entities_types_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strutures/Entities/types/Point */ "./src/js/Strutures/Entities/types/Point.js");
/* harmony import */ var _Strutures_Vector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Strutures/Vector */ "./src/js/Strutures/Vector.js");
/* harmony import */ var _Strutures_Edges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Strutures/Edges */ "./src/js/Strutures/Edges.js");
/* harmony import */ var _Strutures_Entities_types_AABB__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Strutures/Entities/types/AABB */ "./src/js/Strutures/Entities/types/AABB.js");
/* harmony import */ var _Strutures_Entities_types_Segment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Strutures/Entities/types/Segment */ "./src/js/Strutures/Entities/types/Segment.js");
/* harmony import */ var _Strutures_Entities_types_Polygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Strutures/Entities/types/Polygon */ "./src/js/Strutures/Entities/types/Polygon.js");
/* harmony import */ var _utils_draw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/draw */ "./src/js/utils/draw.js");













function init() {
  animate.entities = [];
  var c = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["CENTER"])();
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["background"])('#000');
  animate.entities.push(new _Strutures_Entities_types_Circle__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: c.x + 450 - 180,
    y: c.y,
    mass: 10,
    vx: -.5
  }), new _Strutures_Entities_types_Rectangle__WEBPACK_IMPORTED_MODULE_4__["default"]({
    pos: new _Strutures_Vector__WEBPACK_IMPORTED_MODULE_6__["default"](c.x - 200, c.y + 200),
    physics: 'STATIC',
    width: 500,
    height: 200,
    mass: 1000000,
    angle: 10
  }).mirror());
  animate.entities.push(new _Strutures_Entities_types_Circle__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: c.x,
    y: 0,
    mass: 10,
    vx: -.5
  }), new _Strutures_Entities_types_Rectangle__WEBPACK_IMPORTED_MODULE_4__["default"]({
    pos: new _Strutures_Vector__WEBPACK_IMPORTED_MODULE_6__["default"](c.x - 200, c.y + 200),
    physics: 'STATIC',
    width: 500,
    height: 200,
    mass: 1000000,
    angle: 10
  }));
  /* animate.entities.push(
  	new Circle({ x: c.x, y: 0, mass: 10 }),
  	new Circle({ x: c.x, y: 100, mass: 10 }),
  	new Circle({ x: c.x, y: 200, mass: 10 }),
  	new Circle({ x: c.x, y: 300, mass: 10 }),
  	new Circle({ x: c.x, y: 400, mass: 10 }),
  	new Rectangle({ pos: new Vector(c.x - 200, c.y + 200), physics: 'STATIC', width: 500, height: 200, mass: 1000000, angle: 0 })
  ) */

  /* for(let i = 0; i < 200; i++)
  	animate.entities.push(
  		new Point({ x: random(0, 2*c.x), y: random(0, 2*c.y) })
  	) */
}

function animate() {
  requestAnimationFrame(animate);
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["background"])('#000');
  animate.entities.forEach(function (entity) {
    entity.gravity();
  });

  for (var i = 0; i < animate.entities.length; i++) {
    for (var j = i + 1; j < animate.entities.length; j++) {
      var result = animate.entities[i].intersects(animate.entities[j], true);
      result.type === 'INTERSECTING' && animate.entities[i].collision(animate.entities[j], result);
    }
  }

  animate.entities.forEach(function (entity) {
    return entity.update();
  });
  animate.entities.forEach(function (entity) {
    return entity.show(), Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["stroke"])(entity.color);
  });
}

init();
animate();

/***/ }),

/***/ "./src/js/preset.js":
/*!**************************!*\
  !*** ./src/js/preset.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var preset = {
  physics: {
    constants: {
      g: 1
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (preset);

/***/ }),

/***/ "./src/js/utils/draw.js":
/*!******************************!*\
  !*** ./src/js/utils/draw.js ***!
  \******************************/
/*! exports provided: ellipse, rectangle, rotateRec, point, line, polygon, rotate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipse", function() { return ellipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangle", function() { return rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRec", function() { return rotateRec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygon", function() { return polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/js/canvas.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils/utils.js");
/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulas */ "./src/js/utils/formulas.js");



function ellipse(x, y, radius) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].arc(x, y, radius, 0, Math.PI * 2, false);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
}
function rectangle(x, y, width, height) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rect(x, y, width, height);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
}
function rotateRec(x, y, width, height, angle) {
  rotate(function () {
    var point = Object(_formulas__WEBPACK_IMPORTED_MODULE_2__["stdRotationFormula"])(x, y, angle);
    rectangle(point.x, point.y, width, height);
  }, angle);
}
function point(x, y, weight) {
  rectangle(x, y, weight, weight);
}
function line(x1, y1, x2, y2) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].moveTo(x1, y1);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineTo(x2, y2);
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
}
function polygon(points) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].moveTo(points[0].x, points[0].y);

  for (var i = 0; i < points.length; i++) {
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineTo(points[(i + 1) % points.length].x, points[(i + 1) % points.length].y);
  }

  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].closePath();
}
var rotate = function rotate(func, angle) {
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].save();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].rotate(angle);
  func();
  _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].restore();
};

/***/ }),

/***/ "./src/js/utils/formulas.js":
/*!**********************************!*\
  !*** ./src/js/utils/formulas.js ***!
  \**********************************/
/*! exports provided: pythagoras, atanAngle, stdRotationFormula, radianToDegree, degreeToRadian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pythagoras", function() { return pythagoras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atanAngle", function() { return atanAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stdRotationFormula", function() { return stdRotationFormula; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radianToDegree", function() { return radianToDegree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreeToRadian", function() { return degreeToRadian; });
var defDegree = 180 / Math.PI;
var pythagoras = function pythagoras(dx, dy) {
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
};
var atanAngle = function atanAngle(dx, dy) {
  return Math.atan2(dy, dx);
};
var stdRotationFormula = function stdRotationFormula(x, y, angle) {
  return {
    /**
     * y' = y*cos(a) + x*sin(a)
     * x' = -y*sin(a) + x*cos(a)
     */
    x: y * Math.sin(angle) + x * Math.cos(angle),
    y: y * Math.cos(angle) - x * Math.sin(angle)
  };
};
/**
 * @param {number} radian
 * 
 * @returns {number} degree
 */

var radianToDegree = function radianToDegree(radian) {
  return radian * defDegree;
};
/**
 * @param {number} degrees
 * 
 * @returns {number} radian
 */

var degreeToRadian = function degreeToRadian(degrees) {
  return degrees * (1 / defDegree);
};

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/*! exports provided: random, randomColor, distance, CENTER, background, translate, fill, stroke, fillStyle, strokeStyle, strokeWeight, getMousePosition, constrain, getLargestEntityLength, minCollisionRange, globalQuadTree, getClosestPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CENTER", function() { return CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stroke", function() { return stroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillStyle", function() { return fillStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeStyle", function() { return strokeStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strokeWeight", function() { return strokeWeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMousePosition", function() { return getMousePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constrain", function() { return constrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLargestEntityLength", function() { return getLargestEntityLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minCollisionRange", function() { return minCollisionRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalQuadTree", function() { return globalQuadTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestPoint", function() { return getClosestPoint; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/js/canvas.js");
/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulas */ "./src/js/utils/formulas.js");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw */ "./src/js/utils/draw.js");
/* harmony import */ var _Strutures_Entities_types_AABB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Strutures/Entities/types/AABB */ "./src/js/Strutures/Entities/types/AABB.js");
/* harmony import */ var _Strutures_QuadTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Strutures/QuadTree */ "./src/js/Strutures/QuadTree.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var randomColor = function randomColor() {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["colors"][Math.floor(Math.random() * random(0, _canvas__WEBPACK_IMPORTED_MODULE_0__["colors"].length))];
};
var distance = function distance(x1, x2, y1, y2) {
  return Object(_formulas__WEBPACK_IMPORTED_MODULE_1__["pythagoras"])(x1 - x2, y1 - y2);
};
var CENTER = function CENTER() {
  return {
    x: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 2,
    y: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height / 2
  };
};
var background = function background(color) {
  return Object(_draw__WEBPACK_IMPORTED_MODULE_2__["rectangle"])(-_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width, -_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width * 2, _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height * 2), fillStyle(color), fill();
};
var translate = function translate(x, y) {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].translate(x, y);
};
var fill = function fill(color) {
  return fillStyle(color), _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fill();
};
var stroke = function stroke(color) {
  return strokeStyle(color), _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
};
var fillStyle = function fillStyle(color) {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].fillStyle = color;
};
var strokeStyle = function strokeStyle(color) {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = color;
};
var strokeWeight = function strokeWeight(number) {
  return _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].lineWidth = number;
};
var getMousePosition = function getMousePosition() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return [e.clientX - _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].mozCurrentTransform[4], e.clientY - _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].mozCurrentTransform[5]];
};
var constrain = function constrain(n, min, max) {
  return n < min ? min : n > max ? max : n;
};
var getLargestEntityLength = function getLargestEntityLength(entities) {
  return Math.max.apply(Math, _toConsumableArray(_toConsumableArray(entities).map(function (entity) {
    var _entity$radius;

    return (_entity$radius = entity.radius) !== null && _entity$radius !== void 0 ? _entity$radius : Math.max(entity.width, entity.height);
  })));
};
var minCollisionRange = function minCollisionRange(entity, range) {
  return new _Strutures_Entities_types_AABB__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: entity.middleX - (range + entity.halfWidth),
    y: entity.middleY - (range + entity.halfHeight),
    width: (range + entity.halfWidth) * 2,
    height: (range + entity.halfHeight) * 2
  });
};
var globalQuadTree = function globalQuadTree() {
  var capacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  return new _Strutures_QuadTree__WEBPACK_IMPORTED_MODULE_4__["default"](new _Strutures_Entities_types_AABB__WEBPACK_IMPORTED_MODULE_3__["default"]({
    x: 0,
    y: 0,
    width: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].width,
    height: _canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"].height
  }), capacity);
};
var getClosestPoint = function getClosestPoint(point, points) {
  return points.reduce(function (a, b) {
    return distance(point.x, a.x, point.y, a.y) < distance(point.x, b.x, point.y, b.y) ? a : b;
  });
};

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map