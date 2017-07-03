'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestSender = require('../common/http-request/request-sender');

var _requestSender2 = _interopRequireDefault(_requestSender);

var _clientTokenMapper = require('./v2/payment-mappers/client-token-mapper');

var _clientTokenMapper2 = _interopRequireDefault(_clientTokenMapper);

var _urlHelper = require('./url-helper');

var _urlHelper2 = _interopRequireDefault(_urlHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientTokenGenerator = function () {
  _createClass(ClientTokenGenerator, null, [{
    key: 'create',

    /**
     * @param {Object} config
     * @returns {PaymentSubmitter}
     */
    value: function create(config) {
      var urlHelper = _urlHelper2.default.create(config);
      var requestSender = _requestSender2.default.create();
      var clientTokenMapper = _clientTokenMapper2.default.create();

      return new ClientTokenGenerator(urlHelper, requestSender, clientTokenMapper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {RequestSender} requestSender
     * @param {ClientTokenMapper} clientTokenMapper
     * @returns {void}
     */

  }]);

  function ClientTokenGenerator(urlHelper, requestSender, clientTokenMapper) {
    _classCallCheck(this, ClientTokenGenerator);

    /**
     * @private
     * @type {UrlHelper}
     */
    this.urlHelper = urlHelper;

    /**
     * @private
     * @type {RequestSender}
     */
    this.requestSender = requestSender;

    /**
     * @private
     * @type {ClientTokenMapper}
     */
    this.clientTokenMapper = clientTokenMapper;
  }

  /**
   * @param {PaymentRequestData} data
   * @param {Function} [callback]
   * @returns {void}
   */


  _createClass(ClientTokenGenerator, [{
    key: 'generateClientToken',
    value: function generateClientToken(data, callback) {
      var url = this.urlHelper.getGenerateClientTokenUrl();
      var payload = this.clientTokenMapper.mapToClientToken(data);

      this.requestSender.postRequest(url, payload, {}, callback);
    }
  }]);

  return ClientTokenGenerator;
}();

exports.default = ClientTokenGenerator;
//# sourceMappingURL=client-token-generator.js.map