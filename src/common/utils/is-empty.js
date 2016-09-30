import isObject from './is-object';

/**
 * Is empty
 * @param {*} value
 * @returns {boolean}
 */
export default function isEmpty(value) {
    if (value === '' || value === 0 || value === null || value === undefined) {
        return true;
    }

    if (isObject(value)) {
        return Object.keys(value).length === 0;
    }

    return false;
}
