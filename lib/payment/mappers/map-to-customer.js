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
        quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta;


    return (0, _utils.omitNil)({
        geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
        id: (0, _utils.toString)(customer.customerId),
        session_token: quoteMeta.request ? quoteMeta.request.sessionHash : null
    });
}
//# sourceMappingURL=map-to-customer.js.map