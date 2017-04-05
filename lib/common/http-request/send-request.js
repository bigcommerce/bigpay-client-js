'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = sendRequest;

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _constants = require('./constants');

var _utils = require('../utils');

var _createRequest = require('./create-request');

var _createRequest2 = _interopRequireDefault(_createRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get request body
 * @private
 * @param {Object} data
 * @param {string} [contentType = CONTENT_TYPES.APPLICATION_JSON]
 * @returns {Object}
 */
function getRequestBody(data) {
    var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.CONTENT_TYPES.APPLICATION_JSON;

    if (data && (0, _utils.includes)(contentType, _constants.CONTENT_TYPES.APPLICATION_JSON)) {
        return JSON.stringify(data);
    }

    return data;
}

/**
 * Get response
 * @private
 * @param {XMLHttpRequest} xhr
 * @returns {Object}
 */
function getResponse(xhr) {
    var contentType = xhr.getResponseHeader('Content-Type');
    var status = xhr.status,
        statusText = xhr.statusText;


    var data = 'response' in xhr ? xhr.response : xhr.responseText;

    if (data && (0, _utils.includes)(contentType, _constants.CONTENT_TYPES.APPLICATION_JSON)) {
        data = JSON.parse(data);
    }

    return { data: data, status: status, statusText: statusText };
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
 * @param {Function} [callback]
 * @returns {void}
 */
function sendRequest(url, data, options) {
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

    var mergedOptions = (0, _deepAssign2.default)({}, _constants.DEFAULT_OPTIONS, options);

    var xhr = (0, _createRequest2.default)(url, mergedOptions, function (error) {
        var response = getResponse(xhr);

        if (error || !isSuccessfulRequest(xhr)) {
            callback(response);

            return;
        }

        callback(null, response);
    });

    var payload = getRequestBody(data, mergedOptions.headers['Content-Type']);

    xhr.send(payload);
}
//# sourceMappingURL=send-request.js.map