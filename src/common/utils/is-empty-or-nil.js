import isEmpty from './is-empty';
import isNil from './is-nil';

/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isEmptyOrNil(value) {
    return isEmpty(value) || isNil(value);
}
