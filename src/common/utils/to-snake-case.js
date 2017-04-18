/**
 * @param {string} string
 * @returns {string}
 */
export default function toSnakeCase(string) {
    if (typeof string !== 'string') {
        return string;
    }

    return string.replace(/([a-z\d])([A-Z]+)/g, '$1_$2')
        .replace(/[-\s]+/g, '_')
        .toLowerCase();
}
