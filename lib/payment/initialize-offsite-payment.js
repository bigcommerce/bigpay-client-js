'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initializeOffsitePayment;

var _formPoster = require('form-poster');

var _urls = require('./urls');

var _offsiteMappers = require('./offsite-mappers');

/**
 * Initialize offsite payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @param {Function} [callback]
 * @returns {void}
 */
function initializeOffsitePayment(data) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      host = _ref.host;

  var callback = arguments[2];

  var payload = (0, _offsiteMappers.mapToPayload)(data);
  var url = (0, _urls.getOffsitePaymentUrl)(host);
  var formPoster = (0, _formPoster.createFormPoster)();

  formPoster.postForm(url, payload, callback);
}
//# sourceMappingURL=initialize-offsite-payment.js.map