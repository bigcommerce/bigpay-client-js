'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _offsitePaymentInitializer = require('../payment/offsite-payment-initializer');

var _offsitePaymentInitializer2 = _interopRequireDefault(_offsitePaymentInitializer);

var _paymentSubmitter = require('../payment/payment-submitter');

var _paymentSubmitter2 = _interopRequireDefault(_paymentSubmitter);

var _storeRequestSender = require('../store/store-request-sender');

var _storeRequestSender2 = _interopRequireDefault(_storeRequestSender);

var _defaultConfig = require('./default-config');

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
  _createClass(Client, null, [{
    key: 'create',

    /**
     * @param {Object} config
     * @returns {Client}
     */
    value: function create(config) {
      var clientConfig = (0, _objectAssign2.default)({}, _defaultConfig2.default, config);
      var offsitePaymentInitializer = _offsitePaymentInitializer2.default.create(clientConfig);
      var paymentSubmitter = _paymentSubmitter2.default.create(clientConfig);
      var storeRequestSender = _storeRequestSender2.default.create(clientConfig);

      return new Client(clientConfig, paymentSubmitter, offsitePaymentInitializer, storeRequestSender);
    }

    /**
     * @param {Object} config
     * @param {PaymentSubmitter} paymentSubmitter
     * @param {OffsitePaymentInitializer} offsitePaymentInitializer
     * @param {ClientTokenGenerator} clientTokenGenerator
     * @param {StoreRequestSender} storeRequestSender
     */

  }]);

  function Client(config, paymentSubmitter, offsitePaymentInitializer, clientTokenGenerator, storeRequestSender) {
    _classCallCheck(this, Client);

    /**
     * @private
     * @type {Object}
     */
    this.config = config;

    /**
     * @private
     * @type {PaymentSubmitter}
     */
    this.paymentSubmitter = paymentSubmitter;

    /**
     * @private
     * @type {OffsitePaymentInitializer}
     */
    this.offsitePaymentInitializer = offsitePaymentInitializer;

    /**
     * @private
     * @type {ClientTokenGenerator}
     */
    this.clientTokenGenerator = clientTokenGenerator;

    /**
     * @private
     * @type {StoreRequestSender}
     */
    this.storeRequestSender = storeRequestSender;
  }

  /**
   * @param {PaymentRequestData} data
   * @param {Function} [callback]
   * @returns {void}
   */


  _createClass(Client, [{
    key: 'initializeOffsitePayment',
    value: function initializeOffsitePayment(data, callback) {
      this.offsitePaymentInitializer.initializeOffsitePayment(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */

  }, {
    key: 'submitPayment',
    value: function submitPayment(data, callback) {
      this.paymentSubmitter.submitPayment(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */

  }, {
    key: 'generateClientToken',
    value: function generateClientToken(data, callback) {
      this.clientTokenGenerator.generateClientToken(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {Function} [callback]
     * @return {void}
     */

  }, {
    key: 'getShopperToken',
    value: function getShopperToken(data, callback) {
      this.storeRequestSender.getShopperToken(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {Function} [callback]
     * @return {void}
     */

  }, {
    key: 'getShopperInstruments',
    value: function getShopperInstruments(data, callback) {
      this.storeRequestSender.getShopperInstruments(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {CreditCard} data.creditCard
     * @param {AddressData} data.billingAddress
     * @param {boolean} data.defaultInstrument
     * @param {string} data.providerName
     * @param {Function} [callback]
     * @return {void}
     */

  }, {
    key: 'postShopperInstrument',
    value: function postShopperInstrument(data, callback) {
      this.storeRequestSender.postShopperInstrument(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {string} data.instrumentId
     * @param {Function} [callback]
     * @return {void}
     */

  }, {
    key: 'deleteShopperInstrument',
    value: function deleteShopperInstrument(data, callback) {
      this.storeRequestSender.deleteShopperInstrument(data, callback);
    }
  }]);

  return Client;
}();

exports.default = Client;
//# sourceMappingURL=client.js.map