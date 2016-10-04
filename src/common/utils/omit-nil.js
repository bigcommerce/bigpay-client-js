import isNil from './is-nil';
import omitProperty from './omit-property';

/**
 * Omit nil
 * @param {Object} object
 * @returns {Object}
 */
export default function omitNil(object) {
    return omitProperty(object, isNil);
}
