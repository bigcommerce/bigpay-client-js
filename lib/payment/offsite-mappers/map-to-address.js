'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToAddress;

var _utils = require('../../common/utils');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Map to address
 * @param {PaymentRequestData} data
 * @param {string} addressKey
 * @returns {Object}
 */
function mapToAddress(data, addressKey) {
    var _omitNil;

    var address = data[addressKey] || {};
    var formattedAddressKey = (0, _utils.toSnakeCase)(addressKey);

    return (0, _utils.omitNil)((_omitNil = {}, _defineProperty(_omitNil, formattedAddressKey + '_city', address.city), _defineProperty(_omitNil, formattedAddressKey + '_company', address.company), _defineProperty(_omitNil, formattedAddressKey + '_country_code', address.countryCode), _defineProperty(_omitNil, formattedAddressKey + '_country', address.country), _defineProperty(_omitNil, formattedAddressKey + '_first_name', address.firstName), _defineProperty(_omitNil, formattedAddressKey + '_last_name', address.lastName), _defineProperty(_omitNil, formattedAddressKey + '_phone', address.phone), _defineProperty(_omitNil, formattedAddressKey + '_state_code', address.provinceCode), _defineProperty(_omitNil, formattedAddressKey + '_state', address.province), _defineProperty(_omitNil, formattedAddressKey + '_street_1', address.addressLine1), _defineProperty(_omitNil, formattedAddressKey + '_street_2', address.addressLine2), _defineProperty(_omitNil, formattedAddressKey + '_zip', address.postCode), _omitNil));
}
//# sourceMappingURL=map-to-address.js.map