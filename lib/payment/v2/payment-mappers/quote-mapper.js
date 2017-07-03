'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QuoteMapper = function () {
    function QuoteMapper() {
        _classCallCheck(this, QuoteMapper);
    }

    _createClass(QuoteMapper, [{
        key: 'mapToQuote',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToQuote(data) {
            return (0, _utils.omitNil)({
                billing_address: this.mapToAddress(data, 'billingAddress'),
                shipping_address: this.mapToAddress(data, 'shippingAddress')
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @param {string} addressKey
         * @returns {Object}
         */

    }, {
        key: 'mapToAddress',
        value: function mapToAddress(data, addressKey) {
            var _data$customer = data.customer,
                customer = _data$customer === undefined ? {} : _data$customer;

            var address = data[addressKey] || {};

            return (0, _utils.omitNil)({
                address_line_1: address.addressLine1,
                address_line_2: address.addressLine2,
                city: address.city,
                company: address.company,
                country_code: address.countryCode,
                email: customer.email,
                first_name: address.firstName,
                last_name: address.lastName,
                phone: address.phone,
                postal_code: address.postCode,
                state: address.province
            });
        }
    }], [{
        key: 'create',

        /**
         * @returns {QuoteMapper}
         */
        value: function create() {
            return new QuoteMapper();
        }
    }]);

    return QuoteMapper;
}();

exports.default = QuoteMapper;
//# sourceMappingURL=quote-mapper.js.map