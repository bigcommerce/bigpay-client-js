'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToCustomer;

var _utils = require('../../common/utils');

/**
 * Map to customer
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToCustomer(data) {
    var _data$customer = data.customer,
        customer = _data$customer === undefined ? {} : _data$customer,
        _data$quoteMeta = data.quoteMeta,
        quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta,
        _data$store = data.store,
        store = _data$store === undefined ? {} : _data$store;


    return (0, _utils.omitNil)({
        customer_browser_info: navigator.userAgent,
        customer_email: customer.email,
        customer_first_name: customer.firstName,
        customer_geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
        customer_last_name: customer.lastName,
        customer_locale: store.storeLanguage,
        customer_name: customer.name,
        customer_phone: customer.phoneNumber,
        customer_reference: customer.email
    });
}
//# sourceMappingURL=map-to-customer.js.map