import isEmpty from './is-empty';
import omitProperty from './omit-property';

/**
 * Omit empty
 * @param {Object} object
 * @returns {Object}
 */
export default function omitEmpty(object) {
    return omitProperty(object, isEmpty);
}
