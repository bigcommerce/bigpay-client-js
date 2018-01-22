'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _paymentMethodIdMapper = require('../../payment-method-mappers/payment-method-id-mapper');

var _paymentMethodIdMapper2 = _interopRequireDefault(_paymentMethodIdMapper);

var _utils = require('../../../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentMapper = function () {
    _createClass(PaymentMapper, null, [{
        key: 'create',

        /**
         * @param {PaymentMethodIdMapper} paymentMethodIdMapper
         * @returns {PaymentMapper}
         */
        value: function create() {
            var paymentMethodIdMapper = _paymentMethodIdMapper2.default.create();

            return new PaymentMapper(paymentMethodIdMapper);
        }

        /**
         * @param {PaymentMethodIdMapper} paymentMethodIdMapper
         * @returns {void}
         */

    }]);

    function PaymentMapper(paymentMethodIdMapper) {
        _classCallCheck(this, PaymentMapper);

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


    _createClass(PaymentMapper, [{
        key: 'mapToPayment',
        value: function mapToPayment(data) {
            var _data$order = data.order,
                order = _data$order === undefined ? {} : _data$order,
                _data$orderMeta = data.orderMeta,
                orderMeta = _data$orderMeta === undefined ? {} : _data$orderMeta,
                _data$payment = data.payment,
                payment = _data$payment === undefined ? {} : _data$payment,
                _data$paymentMethod = data.paymentMethod,
                paymentMethod = _data$paymentMethod === undefined ? {} : _data$paymentMethod,
                _data$quoteMeta = data.quoteMeta,
                quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta;


            var payload = {
                device_info: quoteMeta.request ? quoteMeta.request.deviceSessionId : null,
                device: orderMeta.deviceFingerprint ? { fingerprint_id: orderMeta.deviceFingerprint } : null,
                gateway: this.paymentMethodIdMapper.mapToId(paymentMethod),
                notify_url: order.callbackUrl,
                return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null),
                vault_payment_instrument: !payment.instrumentId ? payment.shouldSaveInstrument : null
            };

            var method = payment.method;

            if (method) {
                (0, _objectAssign2.default)(payload, { method: method });
            }

            var nonce = payment.nonce || paymentMethod.nonce;

            if (payment.instrumentId) {
                (0, _objectAssign2.default)(payload, {
                    bigpay_token: this.mapToBigPayToken(data)
                });
            } else if (nonce) {
                (0, _objectAssign2.default)(payload, {
                    credit_card_token: {
                        token: nonce
                    }
                });
            } else {
                (0, _objectAssign2.default)(payload, {
                    credit_card: this.mapToCreditCard(data)
                });
            }

            return (0, _utils.omitNil)(payload);
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToCreditCard',
        value: function mapToCreditCard(data) {
            var _data$payment2 = data.payment,
                payment = _data$payment2 === undefined ? {} : _data$payment2;


            return (0, _utils.omitNil)({
                account_name: payment.ccName,
                month: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.month) : null,
                number: payment.ccNumber,
                verification_value: payment.ccCvv,
                year: payment.ccExpiry ? (0, _utils.toNumber)(payment.ccExpiry.year) : null,
                customer_code: payment.ccCustomerCode
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @return {Object}
         */

    }, {
        key: 'mapToBigPayToken',
        value: function mapToBigPayToken(_ref) {
            var payment = _ref.payment;

            return (0, _utils.omitNil)({
                token: payment.instrumentId,
                verification_value: payment.ccCvv
            });
        }
    }]);

    return PaymentMapper;
}();

exports.default = PaymentMapper;
//# sourceMappingURL=payment-mapper.js.map