'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmptyStringOrNil;

var _isEmptyString = require('./is-empty-string');

var _isEmptyString2 = _interopRequireDefault(_isEmptyString);

var _isNil = require('./is-nil');

var _isNil2 = _interopRequireDefault(_isNil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} value
 * @returns {boolean}
 */
function isEmptyStringOrNil(value) {
  return (0, _isEmptyString2.default)(value) || (0, _isNil2.default)(value);
}
//# sourceMappingURL=is-emptystring-or-nil.js.map