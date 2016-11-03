import { omitNil, toString } from '../../common/utils';

/**
 * Map to customer
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToCustomer(data) {
    const { customer = {}, quoteMeta = {} } = data;

    return omitNil({
        geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
        id: toString(customer.customerId),
        session_token: quoteMeta.request ? quoteMeta.request.sessionHash : null,
    });
}
