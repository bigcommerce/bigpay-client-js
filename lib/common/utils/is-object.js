'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObject;
/**
 * @param {*} value
 * @returns {boolean}
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !Array.isArray(value);
}
//# sourceMappingURL=is-object.js.map