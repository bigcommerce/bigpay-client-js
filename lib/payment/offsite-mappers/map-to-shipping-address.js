'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapToShippingAddress;

var _mapToAddress = require('./map-to-address');

var _mapToAddress2 = _interopRequireDefault(_mapToAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Map to shipping address
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToShippingAddress(data) {
  return (0, _mapToAddress2.default)(data, 'shippingAddress');
}
//# sourceMappingURL=map-to-shipping-address.js.map