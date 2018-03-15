import isEmptyStringOrNil from './is-emptystring-or-nil';
import omitProperty from './omit-property';

/**
 * @param {Object} object
 * @returns {Object}
 */
export default function omitEmptyStringAndNil(object) {
    return omitProperty(object, isEmptyStringOrNil);
}
