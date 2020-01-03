/**
 * @param {*} value
 * @returns {string}
 */
export default function toString(value) {
    if (typeof value === 'string') {
        return value;
    }

    if (typeof value === 'number' && !Number.isNaN(value)) {
        return value.toString();
    }

    return '';
}
