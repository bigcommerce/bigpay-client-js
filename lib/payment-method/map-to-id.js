'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToId;

var _paymentMethods = require('./payment-methods');

/**
 * Map to gateway
 * @param {PaymentMethod} paymentMethod
 * @returns {string}
 */
function mapToId(paymentMethod) {
    if (paymentMethod.id === _paymentMethods.BRAINTREE_PAYPAL) {
        return _paymentMethods.BRAINTREE;
    }

    return paymentMethod.id;
}
//# sourceMappingURL=map-to-id.js.map