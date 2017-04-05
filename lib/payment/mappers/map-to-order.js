'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToOrder;

var _utils = require('../../common/utils');

var _mapToBillingAddress = require('./map-to-billing-address');

var _mapToBillingAddress2 = _interopRequireDefault(_mapToBillingAddress);

var _mapToItems = require('./map-to-items');

var _mapToItems2 = _interopRequireDefault(_mapToItems);

var _mapToOrderTotals = require('./map-to-order-totals');

var _mapToOrderTotals2 = _interopRequireDefault(_mapToOrderTotals);

var _mapToShippingAddress = require('./map-to-shipping-address');

var _mapToShippingAddress2 = _interopRequireDefault(_mapToShippingAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Map to order
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToOrder(data) {
    var order = data.order;


    return (0, _utils.omitNil)({
        billing_address: (0, _mapToBillingAddress2.default)(data),
        currency: order.currency,
        id: (0, _utils.toString)(order.orderId),
        items: (0, _mapToItems2.default)(data),
        shipping_address: (0, _mapToShippingAddress2.default)(data),
        token: order.token,
        totals: (0, _mapToOrderTotals2.default)(data)
    });
}
//# sourceMappingURL=map-to-order.js.map