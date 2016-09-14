/**
 * Includes item
 * @param {array|string} items
 * @param {array|string} item
 * @returns {boolean}
 */
export default function includes(items, item) {
    if (!Array.isArray(items) && typeof items !== 'string') {
        return false;
    }

    return items.indexOf(item) !== -1;
}
