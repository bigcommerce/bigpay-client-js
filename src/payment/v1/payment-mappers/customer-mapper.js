import { omitNil, toString } from '../../../common/utils';

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
        const { customer = {}, quoteMeta = {} } = data;

        return omitNil({
            geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
            id: customer.customerId ? toString(customer.customerId) : null,
            session_token: quoteMeta.request ? quoteMeta.request.sessionHash : null,
        });
    }
}
