'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _paymentMethodIds = require('../payment-method-ids');

var _paymentMethodTypes = require('../payment-method-types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentMethodIdMapper = function () {
    function PaymentMethodIdMapper() {
        _classCallCheck(this, PaymentMethodIdMapper);
    }

    _createClass(PaymentMethodIdMapper, [{
        key: 'mapToId',


        /**
         * @param {PaymentMethod} paymentMethod
         * @returns {string}
         */
        value: function mapToId(paymentMethod) {
            var id = paymentMethod.id;


            if (paymentMethod.method === _paymentMethodTypes.MULTI_OPTION) {
                id = paymentMethod.gateway;
            }

            if (id === _paymentMethodIds.BRAINTREE_PAYPAL) {
                return _paymentMethodIds.BRAINTREE;
            }

            return id;
        }
    }], [{
        key: 'create',

        /**
         * @returns {PaymentMethodIdMapper}
         */
        value: function create() {
            return new PaymentMethodIdMapper();
        }
    }]);

    return PaymentMethodIdMapper;
}();

exports.default = PaymentMethodIdMapper;
//# sourceMappingURL=payment-method-id-mapper.js.map