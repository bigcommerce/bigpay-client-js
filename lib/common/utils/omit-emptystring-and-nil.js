'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = omitEmptyStringAndNil;

var _isEmptystringOrNil = require('./is-emptystring-or-nil');

var _isEmptystringOrNil2 = _interopRequireDefault(_isEmptystringOrNil);

var _omitProperty = require('./omit-property');

var _omitProperty2 = _interopRequireDefault(_omitProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Object} object
 * @returns {Object}
 */
function omitEmptyStringAndNil(object) {
  return (0, _omitProperty2.default)(object, _isEmptystringOrNil2.default);
}
//# sourceMappingURL=omit-emptystring-and-nil.js.map