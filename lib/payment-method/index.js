'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PAYMENT_METHODS = exports.mapToId = undefined;

var _paymentMethods = require('./payment-methods');

var PAYMENT_METHODS = _interopRequireWildcard(_paymentMethods);

var _mapToId = require('./map-to-id');

var _mapToId2 = _interopRequireDefault(_mapToId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.mapToId = _mapToId2.default;
exports.PAYMENT_METHODS = PAYMENT_METHODS;
//# sourceMappingURL=index.js.map