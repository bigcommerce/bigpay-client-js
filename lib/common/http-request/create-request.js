"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createRequest;
/**
 * Set XHR headers
 * @private
 * @param {XMLHttpRequest} xhr
 * @param {Object} headers
 * @returns {void}
 */
function setHeaders(xhr, headers) {
    var headerKeys = Object.keys(headers);

    headerKeys.forEach(function (key) {
        var value = headers[key];

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
 * @param {Function} [callback]
 * @returns {XMLHttpRequest}
 */
function createRequest(url, options) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    var xhr = new XMLHttpRequest();

    xhr.onerror = function () {
        return callback(new Error(xhr.statusText));
    };
    xhr.onload = function () {
        return callback();
    };

    xhr.open(options.method, url, true);
    setOptions(xhr, options);

    return xhr;
}
//# sourceMappingURL=create-request.js.map