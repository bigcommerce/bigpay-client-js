'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

var _customerMapper = require('./customer-mapper');

var _customerMapper2 = _interopRequireDefault(_customerMapper);

var _orderMapper = require('./order-mapper');

var _orderMapper2 = _interopRequireDefault(_orderMapper);

var _paymentMapper = require('./payment-mapper');

var _paymentMapper2 = _interopRequireDefault(_paymentMapper);

var _storeMapper = require('./store-mapper');

var _storeMapper2 = _interopRequireDefault(_storeMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PayloadMapper = function () {
  _createClass(PayloadMapper, null, [{
    key: 'create',

    /**
     * @returns {PayloadMapper}
     */
    value: function create() {
      var customerMapper = _customerMapper2.default.create();
      var orderMapper = _orderMapper2.default.create();
      var paymentMapper = _paymentMapper2.default.create();
      var storeMapper = _storeMapper2.default.create();

      return new PayloadMapper(customerMapper, orderMapper, paymentMapper, storeMapper);
    }

    /**
     * @param {CustomerMapper} customerMapper
     * @param {OrderMapper} orderMapper
     * @param {PaymentMapper} paymentMapper
     * @param {StoreMapper} storeMapper
     */

  }]);

  function PayloadMapper(customerMapper, orderMapper, paymentMapper, storeMapper) {
    _classCallCheck(this, PayloadMapper);

    /**
     * @private
     * @type {CustomerMapper}
     */
    this.customerMapper = customerMapper;

    /**
     * @private
     * @type {OrderMapper}
     */
    this.orderMapper = orderMapper;

    /**
     * @private
     * @type {PaymentMapper}
     */
    this.paymentMapper = paymentMapper;

    /**
     * @private
     * @type {StoreMapper}
     */
    this.storeMapper = storeMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @returns {Object}
   */


  _createClass(PayloadMapper, [{
    key: 'mapToPayload',
    value: function mapToPayload(data) {
      var _data$order = data.order,
          order = _data$order === undefined ? {} : _data$order;


      return (0, _utils.omitNil)({
        customer: this.customerMapper.mapToCustomer(data),
        notify_url: order.callbackUrl,
        order: this.orderMapper.mapToOrder(data),
        payment: this.paymentMapper.mapToPayment(data),
        store: this.storeMapper.mapToStore(data)
      });
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */

  }, {
    key: 'mapToHeaders',
    value: function mapToHeaders(data) {
      var authToken = data.authToken;


      return (0, _utils.omitNil)({
        Authorization: authToken
      });
    }
  }]);

  return PayloadMapper;
}();

exports.default = PayloadMapper;
//# sourceMappingURL=payload-mapper.js.map