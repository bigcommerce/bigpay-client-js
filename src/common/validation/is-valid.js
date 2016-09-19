import { isObject } from '../utils';

/**
 * Is valid result
 * @param {Object} validation
 * @returns {Boolean}
 */
export default function isValid(validation) {
    const keys = Object.keys(validation);

    while (keys.length > 0) {
        const key = keys.shift();

        if (validation[key] === false) {
            return false;
        }

        if (isObject(validation[key]) && !isValid(validation[key])) {
            return false;
        }
    }

    return true;
}
