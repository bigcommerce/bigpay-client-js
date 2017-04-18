'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToPayload;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utils = require('../../common/utils');

var _paymentMethod = require('../../payment-method');

var _mapToBillingAddress = require('./map-to-billing-address');

var _mapToBillingAddress2 = _interopRequireDefault(_mapToBillingAddress);

var _mapToCustomer = require('./map-to-customer');

var _mapToCustomer2 = _interopRequireDefault(_mapToCustomer);

var _mapToMeta = require('./map-to-meta');

var _mapToMeta2 = _interopRequireDefault(_mapToMeta);

var _mapToShippingAddress = require('./map-to-shipping-address');

var _mapToShippingAddress2 = _interopRequireDefault(_mapToShippingAddress);

var _mapToStore = require('./map-to-store');

var _mapToStore2 = _interopRequireDefault(_mapToStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Map to payload
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToPayload(data) {
    var authToken = data.authToken,
        _data$order = data.order,
        order = _data$order === undefined ? {} : _data$order,
        _data$paymentMethod = data.paymentMethod,
        paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;


    var payload = (0, _objectAssign2.default)({
        amount: order.grandTotal ? order.grandTotal.integerAmount : null,
        bc_auth_token: authToken,
        currency: order.currency,
        gateway: paymentMethod.gateway,
        notify_url: order.callbackUrl,
        order_id: (0, _utils.toString)(order.orderId),
        page_title: document.title,
        payment_method_id: (0, _paymentMethod.mapToId)(paymentMethod),
        reference_id: (0, _utils.toString)(order.orderId),
        return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null)
    }, (0, _mapToBillingAddress2.default)(data), (0, _mapToCustomer2.default)(data), (0, _mapToMeta2.default)(data), (0, _mapToShippingAddress2.default)(data), (0, _mapToStore2.default)(data));

    return (0, _utils.omitNil)(payload);
}
//# sourceMappingURL=map-to-payload.js.map