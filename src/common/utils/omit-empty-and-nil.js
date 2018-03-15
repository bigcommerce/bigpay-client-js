import isEmptyOrNil from './is-empty-or-nil';
import omitProperty from './omit-property';

/**
 * @param {Object} object
 * @returns {Object}
 */
export default function omitEmptyAndNil(object) {
    return omitProperty(object, isEmptyOrNil);
}
