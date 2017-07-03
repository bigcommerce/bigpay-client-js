'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

var _cartMapper = require('./cart-mapper');

var _cartMapper2 = _interopRequireDefault(_cartMapper);

var _gatewayMapper = require('./gateway-mapper');

var _gatewayMapper2 = _interopRequireDefault(_gatewayMapper);

var _quoteMapper = require('./quote-mapper');

var _quoteMapper2 = _interopRequireDefault(_quoteMapper);

var _storeMapper = require('./store-mapper');

var _storeMapper2 = _interopRequireDefault(_storeMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClientTokenMapper = function () {
  _createClass(ClientTokenMapper, null, [{
    key: 'create',

    /**
     * @returns {ClientTokenMapper}
     */
    value: function create() {
      var cartMapper = _cartMapper2.default.create();
      var gatewayMapper = _gatewayMapper2.default.create();
      var quoteMapper = _quoteMapper2.default.create();
      var storeMapper = _storeMapper2.default.create();

      return new ClientTokenMapper(cartMapper, gatewayMapper, quoteMapper, storeMapper);
    }

    /**
     * @param {CartMapper} cartMapper
     * @param {GatewayMapper} gatewayMapper
     * @param {QuoteMapper} quoteMapper
     * @param {StoreMapper} storeMapper
     */

  }]);

  function ClientTokenMapper(cartMapper, gatewayMapper, quoteMapper, storeMapper) {
    _classCallCheck(this, ClientTokenMapper);

    /**
     * @private
     * @type {CartMapper}
     */
    this.cartMapper = cartMapper;

    /**
     * @private
     * @type {GatewayMapper}
     */
    this.gatewayMapper = gatewayMapper;

    /**
     * @private
     * @type {QuoteMapper}
     */
    this.quoteMapper = quoteMapper;

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


  _createClass(ClientTokenMapper, [{
    key: 'mapToClientToken',
    value: function mapToClientToken(data) {
      return (0, _utils.omitNil)({
        cart: this.cartMapper.mapToCart(data),
        gateway: this.gatewayMapper.mapToGateway(data),
        quote: this.quoteMapper.mapToQuote(data),
        store: this.storeMapper.mapToStore(data)
      });
    }
  }]);

  return ClientTokenMapper;
}();

exports.default = ClientTokenMapper;
//# sourceMappingURL=client-token-mapper.js.map