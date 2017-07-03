'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _formPoster = require('form-poster');

var _paymentTypes = require('./payment-types');

var _payloadMapper = require('./offsite-payment-mappers/payload-mapper');

var _payloadMapper2 = _interopRequireDefault(_payloadMapper);

var _urlHelper = require('./url-helper');

var _urlHelper2 = _interopRequireDefault(_urlHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OffsitePaymentInitializer = function () {
  _createClass(OffsitePaymentInitializer, null, [{
    key: 'create',

    /**
     * @param {Object} config
     * @returns {OffsitePaymentInitializer}
     */
    value: function create(config) {
      var urlHelper = _urlHelper2.default.create(config);
      var formPoster = (0, _formPoster.createFormPoster)();
      var payloadMapper = _payloadMapper2.default.create();

      return new OffsitePaymentInitializer(urlHelper, formPoster, payloadMapper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {FormPoster} formPoster
     * @param {PayloadMapper} payloadMapper
     * @returns {void}
     */

  }]);

  function OffsitePaymentInitializer(urlHelper, formPoster, payloadMapper) {
    _classCallCheck(this, OffsitePaymentInitializer);

    /**
     * @private
     * @type {UrlHelper}
     */
    this.urlHelper = urlHelper;

    /**
     * @private
     * @type {FormPoster}
     */
    this.formPoster = formPoster;

    /**
     * @private
     * @type {PayloadMapper}
     */
    this.payloadMapper = payloadMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @param {Function} [callback]
   * @returns {void}
   * @throws {Error}
   */


  _createClass(OffsitePaymentInitializer, [{
    key: 'initializeOffsitePayment',
    value: function initializeOffsitePayment(data, callback) {
      var _data$paymentMethod = data.paymentMethod,
          paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;


      if (paymentMethod.type !== _paymentTypes.HOSTED) {
        throw new Error(paymentMethod.type + ' is not supported.');
      }

      var payload = this.payloadMapper.mapToPayload(data);
      var url = this.urlHelper.getOffsitePaymentUrl();

      this.formPoster.postForm(url, payload, callback);
    }
  }]);

  return OffsitePaymentInitializer;
}();

exports.default = OffsitePaymentInitializer;
//# sourceMappingURL=offsite-payment-initializer.js.map