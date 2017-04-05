'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToPayload;

var _utils = require('../../common/utils');

var _mapToCustomer = require('./map-to-customer');

var _mapToCustomer2 = _interopRequireDefault(_mapToCustomer);

var _mapToOrder = require('./map-to-order');

var _mapToOrder2 = _interopRequireDefault(_mapToOrder);

var _mapToPayment = require('./map-to-payment');

var _mapToPayment2 = _interopRequireDefault(_mapToPayment);

var _mapToStore = require('./map-to-store');

var _mapToStore2 = _interopRequireDefault(_mapToStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Map to payload
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToPayload(data) {
    var _data$order = data.order,
        order = _data$order === undefined ? {} : _data$order;


    return (0, _utils.omitNil)({
        customer: (0, _mapToCustomer2.default)(data),
        notify_url: order.callbackUrl,
        order: (0, _mapToOrder2.default)(data),
        payment: (0, _mapToPayment2.default)(data),
        store: (0, _mapToStore2.default)(data)
    });
}
//# sourceMappingURL=map-to-payload.js.map