'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = includes;
/**
 * Includes item
 * @param {array|string} items
 * @param {array|string} item
 * @returns {boolean}
 */
function includes(items, item) {
    if (!Array.isArray(items) && typeof items !== 'string') {
        return false;
    }

    return items.indexOf(item) !== -1;
}
//# sourceMappingURL=includes.js.map