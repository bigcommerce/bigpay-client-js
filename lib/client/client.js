'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _payment = require('../payment');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
    /**
     * Construct BigpayClient
     * @param {Object} config
     * @param {string} config.host
     */
    function Client(_ref) {
        var host = _ref.host;

        _classCallCheck(this, Client);

        this.host = host;
    }

    /**
     * Initialize offsite payment
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */


    _createClass(Client, [{
        key: 'initializeOffsitePayment',
        value: function initializeOffsitePayment(data, callback) {
            var _data$paymentMethod = data.paymentMethod,
                paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod;

            var options = { host: this.host };

            if (paymentMethod.type !== _payment.PAYMENT_TYPES.HOSTED) {
                throw new Error(paymentMethod.type + ' is not supported.');
            }

            (0, _payment.initializeOffsitePayment)(data, options, callback);
        }

        /**
         * Submit payment
         * @param {PaymentRequestData} data
         * @param {Function} [callback]
         * @returns {void}
         */

    }, {
        key: 'submitPayment',
        value: function submitPayment(data, callback) {
            var _data$paymentMethod2 = data.paymentMethod,
                paymentMethod = _data$paymentMethod2 === undefined ? {} : _data$paymentMethod2;

            var options = { host: this.host };

            if (paymentMethod.type !== _payment.PAYMENT_TYPES.API) {
                throw new Error(paymentMethod.type + ' is not supported.');
            }

            (0, _payment.submitPayment)(data, options, callback);
        }
    }]);

    return Client;
}();

exports.default = Client;
//# sourceMappingURL=client.js.map