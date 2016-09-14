import objectAssign from 'object-assign';
import { METHOD_TYPES } from './constants';
import sendRequest from './send-request';

/**
 * Post request
 * @param {string} url
 * @param {Object} data
 * @param {Object} [options]
 * @returns {Promise}
 */
export default function postRequest(url, data, options) {
    const mergedOptions = objectAssign({}, options, {
        method: METHOD_TYPES.POST,
    });

    return sendRequest(url, data, mergedOptions);
}
