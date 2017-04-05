'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = omitProperty;

var _isObject = require('./is-object');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Omit property
 * @param {Object} object
 * @param {Function} predicateFn
 * @returns {Object}
 */
function omitProperty(object, predicateFn) {
    if (!(0, _isObject2.default)(object)) {
        return object;
    }

    var keys = Object.keys(object);

    return keys.reduce(function (result, key) {
        var value = object[key];

        if (!predicateFn(value)) {
            result[key] = value;
        }

        return result;
    }, {});
}
//# sourceMappingURL=omit-property.js.map