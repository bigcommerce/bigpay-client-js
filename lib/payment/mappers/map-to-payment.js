'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToPayment;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utils = require('../../common/utils');

var _paymentMethod = require('../../payment-method');

var _mapToCreditCard = require('./map-to-credit-card');

var _mapToCreditCard2 = _interopRequireDefault(_mapToCreditCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Map to payment
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToPayment(data) {
    var _data$order = data.order,
        order = _data$order === undefined ? {} : _data$order,
        _data$payment = data.payment,
        payment = _data$payment === undefined ? {} : _data$payment,
        _data$paymentMethod = data.paymentMethod,
        paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod,
        _data$quoteMeta = data.quoteMeta,
        quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta;


    var payload = {
        device_info: quoteMeta.request ? quoteMeta.request.deviceSessionId : null,
        gateway: (0, _paymentMethod.mapToId)(paymentMethod),
        notify_url: order.callbackUrl,
        return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null)
    };

    var nonce = payment.nonce || paymentMethod.nonce;

    if (nonce) {
        (0, _objectAssign2.default)(payload, {
            credit_card_token: {
                token: nonce
            }
        });
    } else {
        (0, _objectAssign2.default)(payload, {
            credit_card: (0, _mapToCreditCard2.default)(data)
        });
    }

    return (0, _utils.omitNil)(payload);
}
//# sourceMappingURL=map-to-payment.js.map