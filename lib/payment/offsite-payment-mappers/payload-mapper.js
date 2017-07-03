'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _utils = require('../../common/utils');

var _addressMapper = require('./address-mapper');

var _addressMapper2 = _interopRequireDefault(_addressMapper);

var _customerMapper = require('./customer-mapper');

var _customerMapper2 = _interopRequireDefault(_customerMapper);

var _metaMapper = require('./meta-mapper');

var _metaMapper2 = _interopRequireDefault(_metaMapper);

var _paymentMethodIdMapper = require('../payment-method-mappers/payment-method-id-mapper');

var _paymentMethodIdMapper2 = _interopRequireDefault(_paymentMethodIdMapper);

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
      var addressMapper = _addressMapper2.default.create();
      var customerMapper = _customerMapper2.default.create();
      var metaMapper = _metaMapper2.default.create();
      var paymentMethodIdMapper = _paymentMethodIdMapper2.default.create();
      var storeMapper = _storeMapper2.default.create();

      return new PayloadMapper(addressMapper, customerMapper, metaMapper, paymentMethodIdMapper, storeMapper);
    }

    /**
     * @param {AddressMapper} addressMapper
     * @param {CustomerMapper} customerMapper
     * @param {MetaMapper} metaMapper
     * @param {PaymentMethodIdMapper} paymentMethodIdMapper
     * @param {StoreMapper} storeMapper
     * @returns {Object}
     */

  }]);

  function PayloadMapper(addressMapper, customerMapper, metaMapper, paymentMethodIdMapper, storeMapper) {
    _classCallCheck(this, PayloadMapper);

    /**
     * @private
     * @type {AddressMapper}
     */
    this.addressMapper = addressMapper;

    /**
     * @private
     * @type {CustomerMapper}
     */
    this.customerMapper = customerMapper;

    /**
     * @private
     * @type {MetaMapper}
     */
    this.metaMapper = metaMapper;

    /**
     * @private
     * @type {PaymentMethodIdMapper}
     */
    this.paymentMethodIdMapper = paymentMethodIdMapper;

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
      var authToken = data.authToken,
          _data$order = data.order,
          order = _data$order === undefined ? {} : _data$order,
          _data$paymentMethod = data.paymentMethod,
          paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;


      var payload = (0, _objectAssign2.default)({
        amount: order.grandTotal ? order.grandTotal.integerAmount : null,
        bc_auth_token: authToken,
        currency: order.currency,
        gateway: this.paymentMethodIdMapper.mapToId(paymentMethod),
        notify_url: order.callbackUrl,
        order_id: order.orderId ? (0, _utils.toString)(order.orderId) : null,
        page_title: document.title ? document.title : null,
        payment_method_id: paymentMethod.id,
        reference_id: order.orderId ? (0, _utils.toString)(order.orderId) : null,
        return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null)
      }, this.addressMapper.mapToBillingAddress(data), this.customerMapper.mapToCustomer(data), this.metaMapper.mapToMeta(data), this.addressMapper.mapToShippingAddress(data), this.storeMapper.mapToStore(data));

      return (0, _utils.omitNil)(payload);
    }
  }]);

  return PayloadMapper;
}();

exports.default = PayloadMapper;
//# sourceMappingURL=payload-mapper.js.map