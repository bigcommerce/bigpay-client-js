'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toString;
/**
 * To string
 * @param {*} value
 * @returns {string}
 */
function toString(value) {
    if (typeof value === 'string') {
        return value;
    }

    if (typeof value === 'number' && !isNaN(value)) {
        return value.toString();
    }

    return '';
}
//# sourceMappingURL=to-string.js.map