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
      var paymentSubmitter = _paymentSubmitter2.default.create(clientConfig);
      var offsitePaymentInitializer = _offsitePaymentInitializer2.default.create(clientConfig);

      return new Client(clientConfig, paymentSubmitter, offsitePaymentInitializer);
    }

    /**
     * @param {Object} config
     * @param {PaymentSubmitter} paymentSubmitter
     * @param {OffsitePaymentInitializer} offsitePaymentInitializer
     * @param {ClientTokenGenerator} clientTokenGenerator
     */

  }]);

  function Client(config, paymentSubmitter, offsitePaymentInitializer, clientTokenGenerator) {
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
  }]);

  return Client;
}();

exports.default = Client;
//# sourceMappingURL=client.js.map