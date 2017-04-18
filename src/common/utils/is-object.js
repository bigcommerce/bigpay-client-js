/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
