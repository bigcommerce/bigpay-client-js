'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = postRequest;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _constants = require('./constants');

var _sendRequest = require('./send-request');

var _sendRequest2 = _interopRequireDefault(_sendRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Post request
 * @param {string} url
 * @param {Object} data
 * @param {Object} [options]
 * @param {Function} [callback]
 * @returns {void}
 */
function postRequest(url, data, options, callback) {
    var mergedOptions = (0, _objectAssign2.default)({}, options, {
        method: _constants.METHOD_TYPES.POST
    });

    (0, _sendRequest2.default)(url, data, mergedOptions, callback);
}
//# sourceMappingURL=post-request.js.map