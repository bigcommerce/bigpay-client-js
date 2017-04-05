'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toSnakeCase;
/**
 * To snake case
 * @param {string} string
 * @returns {string}
 */
function toSnakeCase(string) {
    if (!string) {
        return string;
    }

    return string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
}
//# sourceMappingURL=to-snake-case.js.map