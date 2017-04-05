'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapToBillingAddress;

var _mapToAddress = require('./map-to-address');

var _mapToAddress2 = _interopRequireDefault(_mapToAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Map to billing address
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToBillingAddress(data) {
  return (0, _mapToAddress2.default)(data, 'billingAddress');
}
//# sourceMappingURL=map-to-billing-address.js.map