import isEmptyString from './is-empty-string';
import isNil from './is-nil';

/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isEmptyStringOrNil(value) {
    return isEmptyString(value) || isNil(value);
}
