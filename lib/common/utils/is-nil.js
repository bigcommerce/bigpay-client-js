"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNil;
/**
 * Is nil
 * @param {*} value
 * @returns {boolean}
 */
function isNil(value) {
    if (value === null || value === undefined) {
        return true;
    }

    return false;
}
//# sourceMappingURL=is-nil.js.map