import objectAssign from 'object-assign';
import { CONTENT_TYPES, DEFAULT_OPTIONS } from './constants';
import { includes } from '../utils';
import createRequest from './create-request';

/**
 * Get request body
 * @private
 * @param {Object} data
 * @param {string} [contentType = CONTENT_TYPES.APPLICATION_JSON]
 * @returns {Object}
 */
function getRequestBody(data, contentType = CONTENT_TYPES.APPLICATION_JSON) {
    if (data && includes(contentType, CONTENT_TYPES.APPLICATION_JSON)) {
        return JSON.stringify(data);
    }

    return data;
}

/**
 * Get error response
 * @private
 * @param {XMLHttpRequest} xhr
 * @returns {Error}
 */
function getErrorResponse(xhr) {
    const response = getResponse(xhr);

    return new Error(response);
}

/**
 * Get response
 * @private
 * @param {XMLHttpRequest} xhr
 * @returns {Object}
 */
function getResponse(xhr) {
    const contentType = xhr.getResponseHeader('Content-Type');
    const { status, statusText } = xhr;

    let data = 'response' in xhr ? xhr.response : xhr.responseText;

    if (data && includes(contentType, CONTENT_TYPES.APPLICATION_JSON)) {
        data = JSON.parse(data);
    }

    return { data, status, statusText };
}

/**
 * Is request successful
 * @private
 * @param {XMLHttpRequest} xhr
 * @returns {boolean}
 */
function isSuccessfulRequest(xhr) {
    return xhr.status >= 200 && xhr.status < 300;
}

/**
 * Send request
 * @param {string} url
 * @param {Object} data
 * @param {Object} [options]
 * @returns {Promise}
 */
export default function sendRequest(url, data, options) {
    const mergedOptions = objectAssign({}, DEFAULT_OPTIONS, options);

    return new Promise((resolve, reject) => {
        function onerror(xhr) {
            reject(getErrorResponse(xhr));
        }

        function onload(xhr) {
            if (isSuccessfulRequest(xhr)) {
                resolve(getResponse(xhr));
            } else {
                reject(getErrorResponse(xhr));
            }
        }

        const xhr = createRequest(url, mergedOptions, { onerror, onload });
        const payload = getRequestBody(data, mergedOptions.headers['Content-Type']);

        xhr.send(payload);
    });
}
