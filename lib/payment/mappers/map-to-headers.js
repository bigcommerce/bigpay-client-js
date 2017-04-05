'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToHeaders;

var _utils = require('../../common/utils');

/**
 * Map to headers
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToHeaders(data) {
    var authToken = data.authToken;


    return (0, _utils.omitNil)({
        Authorization: authToken
    });
}
//# sourceMappingURL=map-to-headers.js.map