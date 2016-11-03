import { omitNil } from '../../common/utils';

/**
 * Map to customer
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToCustomer(data) {
    const { customer = {}, quoteMeta = {}, store = {} } = data;

    return omitNil({
        customer_browser_info: navigator.userAgent,
        customer_email: customer.email,
        customer_first_name: customer.firstName,
        customer_geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
        customer_last_name: customer.lastName,
        customer_locale: store.storeLanguage,
        customer_name: customer.name,
        customer_phone: customer.phoneNumber,
        customer_reference: customer.email,
    });
}
