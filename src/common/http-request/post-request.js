import objectAssign from 'object-assign';
import { METHOD_TYPES } from './constants';
import sendRequest from './send-request';

/**
 * Post request
 * @param {string} url
 * @param {Object} data
 * @param {Object} [options]
 * @param {Function} [callback]
 * @returns {void}
 */
export default function postRequest(url, data, options, callback) {
    const mergedOptions = objectAssign({}, options, {
        method: METHOD_TYPES.POST,
    });

    sendRequest(url, data, mergedOptions, callback);
}
