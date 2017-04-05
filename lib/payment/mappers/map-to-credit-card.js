'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToCreditCard;

var _utils = require('../../common/utils');

/**
 * Map to credit card
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToCreditCard(data) {
    var _data$payment = data.payment,
        payment = _data$payment === undefined ? {} : _data$payment;


    return (0, _utils.omitNil)({
        account_name: payment.ccName,
        month: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.month) : null,
        number: payment.ccNumber,
        verification_value: payment.ccCvv,
        year: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.year) : null
    });
}
//# sourceMappingURL=map-to-credit-card.js.map