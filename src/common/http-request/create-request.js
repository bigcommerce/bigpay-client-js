/**
 * Set XHR headers
 * @private
 * @param {XMLHttpRequest} xhr
 * @param {Object} headers
 * @returns {void}
 */
function setHeaders(xhr, headers) {
    const headerKeys = Object.keys(headers);

    headerKeys.forEach(key => {
        const value = headers[key];

        xhr.setRequestHeader(key, value);
    });
}

/**
 * Set XHR options
 * @private
 * @param {XMLHttpRequest} xhr
 * @param {Object} options
 * @returns {void}
 */
function setOptions(xhr, options) {
    xhr.withCredentials = options.withCredentials;

    if (options.headers) {
        setHeaders(xhr, options.headers);
    }
}

/**
 * Create XMLHttpRequest
 * @param {string} url
 * @param {Object} options
 * @param {Object} [callbacks]
 * @param {Function} [callbacks.onload]
 * @param {Function} [callbacks.onerror]
 * @returns {XMLHttpRequest}
 */
export default function createRequest(url, options, { onload, onerror } = {}) {
    const xhr = new XMLHttpRequest();

    if (onerror) {
        xhr.onerror = () => onerror(xhr);
    }

    if (onload) {
        xhr.onload = () => onload(xhr);
    }

    xhr.open(options.method, url, true);
    setOptions(xhr, options);

    return xhr;
}
