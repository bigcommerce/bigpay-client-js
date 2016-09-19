/**
 * Is required value valid
 * @param {*} value
 * @returns {boolean}
 */
export default function validateRequired(value) {
    return value !== undefined &&
           value !== null &&
           value !== '';
}
