'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToAddress;

var _utils = require('../../common/utils');

/**
 * Map to address
 * @param {PaymentRequestData} data
 * @param {string} addressKey
 * @returns {Object}
 */
function mapToAddress(data, addressKey) {
    var address = data[addressKey] || {};

    return (0, _utils.omitNil)({
        city: address.city,
        company: address.company,
        country_code: address.countryCode,
        country: address.country,
        first_name: address.firstName,
        last_name: address.lastName,
        phone: address.phone,
        state_code: address.provinceCode,
        state: address.province,
        street_1: address.addressLine1,
        street_2: address.addressLine2,
        zip: address.postCode
    });
}
//# sourceMappingURL=map-to-address.js.map