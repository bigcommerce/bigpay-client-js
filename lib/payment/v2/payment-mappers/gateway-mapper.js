'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

var _paymentMethodIdMapper = require('../../payment-method-mappers/payment-method-id-mapper');

var _paymentMethodIdMapper2 = _interopRequireDefault(_paymentMethodIdMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GatewayMapper = function () {
    _createClass(GatewayMapper, null, [{
        key: 'create',

        /**
         * @returns {GatewayMapper}
         */
        value: function create() {
            var paymentMethodIdMapper = _paymentMethodIdMapper2.default.create();

            return new GatewayMapper(paymentMethodIdMapper);
        }

        /**
         * @param {PaymentMethodIdMapper} paymentMethodIdMapper
         * @returns {void}
         */

    }]);

    function GatewayMapper(paymentMethodIdMapper) {
        _classCallCheck(this, GatewayMapper);

        /**
         * @private
         * @type {PaymentMethodIdMapper}
         */
        this.paymentMethodIdMapper = paymentMethodIdMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */


    _createClass(GatewayMapper, [{
        key: 'mapToGateway',
        value: function mapToGateway(data) {
            var _data$paymentMethod = data.paymentMethod,
                paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;


            return (0, _utils.omitNil)({
                name: this.paymentMethodIdMapper.mapToId(paymentMethod)
            });
        }
    }]);

    return GatewayMapper;
}();

exports.default = GatewayMapper;
//# sourceMappingURL=gateway-mapper.js.map