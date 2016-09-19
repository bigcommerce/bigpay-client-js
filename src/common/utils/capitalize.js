/**
 * Capitalize
 * @param {string} string
 * @returns {string}
 */
export default function capitalize(string) {
    if (!string) {
        return string;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}
