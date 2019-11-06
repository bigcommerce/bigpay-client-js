import { omitNil } from '../../common/utils';

export default class CustomerMapper {
    /**
     * @returns {CustomerMapper}
     */
    static create() {
        return new CustomerMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToCustomer(data) {
        const { customer = {}, quoteMeta = {}, store = {} } = data;

        return omitNil({
            customer_browser_info: navigator.userAgent,
            customer_email: customer.email,
            customer_first_name: customer.firstName,
            customer_geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
            customer_id: customer.customerId,
            customer_last_name: customer.lastName,
            customer_locale: store.storeLanguage,
            customer_name: customer.name,
            customer_phone: customer.phoneNumber,
            customer_reference: customer.email,
        });
    }
}
