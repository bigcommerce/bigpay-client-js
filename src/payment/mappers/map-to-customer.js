import { omitNil, toString } from '../../common/utils';

/**
 * Map to customer
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToCustomer(data) {
    const { customer = {} } = data;

    return omitNil({
        geo_ip_country_code: customer.geoCountryCode,
        id: toString(customer.customerId),
        session_token: customer.sessionHash,
    });
}
