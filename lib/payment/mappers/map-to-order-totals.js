'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToOrderTotals;

var _utils = require('../../common/utils');

/**
 * Map to order totals
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToOrderTotals(data) {
    var order = data.order;


    return (0, _utils.omitNil)({
        grand_total: order.grandTotal ? order.grandTotal.integerAmount : null,
        handling: order.handling ? order.handling.integerAmount : null,
        shipping: order.shipping ? order.shipping.integerAmount : null,
        subtotal: order.subtotal ? order.subtotal.integerAmount : null,
        tax: order.taxTotal ? order.taxTotal.integerAmount : null
    });
}
//# sourceMappingURL=map-to-order-totals.js.map