/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isNil(value) {
    if (value === null || value === undefined) {
        return true;
    }

    return false;
}
