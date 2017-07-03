'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../common/utils');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddressMapper = function () {
    function AddressMapper() {
        _classCallCheck(this, AddressMapper);
    }

    _createClass(AddressMapper, [{
        key: 'mapToBillingAddress',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToBillingAddress(data) {
            return this.mapToAddress(data, 'billingAddress');
        }

        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToShippingAddress',
        value: function mapToShippingAddress(data) {
            return this.mapToAddress(data, 'shippingAddress');
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
            var _omitNil;

            var address = data[addressKey] || {};
            var formattedAddressKey = (0, _utils.toSnakeCase)(addressKey);

            return (0, _utils.omitNil)((_omitNil = {}, _defineProperty(_omitNil, formattedAddressKey + '_city', address.city), _defineProperty(_omitNil, formattedAddressKey + '_company', address.company), _defineProperty(_omitNil, formattedAddressKey + '_country_code', address.countryCode), _defineProperty(_omitNil, formattedAddressKey + '_country', address.country), _defineProperty(_omitNil, formattedAddressKey + '_first_name', address.firstName), _defineProperty(_omitNil, formattedAddressKey + '_last_name', address.lastName), _defineProperty(_omitNil, formattedAddressKey + '_phone', address.phone), _defineProperty(_omitNil, formattedAddressKey + '_state_code', address.provinceCode), _defineProperty(_omitNil, formattedAddressKey + '_state', address.province), _defineProperty(_omitNil, formattedAddressKey + '_street_1', address.addressLine1), _defineProperty(_omitNil, formattedAddressKey + '_street_2', address.addressLine2), _defineProperty(_omitNil, formattedAddressKey + '_zip', address.postCode), _omitNil));
        }
    }], [{
        key: 'create',

        /**
         * @returns {AddressMapper}
         */
        value: function create() {
            return new AddressMapper();
        }
    }]);

    return AddressMapper;
}();

exports.default = AddressMapper;
//# sourceMappingURL=address-mapper.js.map