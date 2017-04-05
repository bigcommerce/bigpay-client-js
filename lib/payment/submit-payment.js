'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = submitPayment;

var _urls = require('./urls');

var _httpRequest = require('../common/http-request');

var _mappers = require('./mappers');

/**
 * Submit payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @param {Function} [callback]
 * @returns {void}
 */
function submitPayment(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        host = _ref.host;

    var callback = arguments[2];

    var payload = (0, _mappers.mapToPayload)(data);
    var url = (0, _urls.getPaymentUrl)(host);
    var options = {
        headers: (0, _mappers.mapToHeaders)(data)
    };

    (0, _httpRequest.postRequest)(url, payload, options, callback);
}
//# sourceMappingURL=submit-payment.js.map