'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = omitNil;

var _isNil = require('./is-nil');

var _isNil2 = _interopRequireDefault(_isNil);

var _omitProperty = require('./omit-property');

var _omitProperty2 = _interopRequireDefault(_omitProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Object} object
 * @returns {Object}
 */
function omitNil(object) {
  return (0, _omitProperty2.default)(object, _isNil2.default);
}
//# sourceMappingURL=omit-nil.js.map