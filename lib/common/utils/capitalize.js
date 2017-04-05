"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = capitalize;
/**
 * Capitalize
 * @param {string} string
 * @returns {string}
 */
function capitalize(string) {
    if (!string) {
        return string;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}
//# sourceMappingURL=capitalize.js.map