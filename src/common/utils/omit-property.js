import isObject from './is-object';

/**
 * Omit property
 * @param {Object} object
 * @param {Function} predicateFn
 * @returns {Object}
 */
export default function omitProperty(object, predicateFn) {
    if (!isObject(object)) {
        return object;
    }

    const keys = Object.keys(object);

    return keys.reduce((result, key) => {
        const value = object[key];

        if (!predicateFn(value)) {
            result[key] = value;
        }

        return result;
    }, {});
}
