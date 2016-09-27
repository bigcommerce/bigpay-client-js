import mapToCustomer from '../../../src/payment/offsite-mappers/map-to-customer';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToCustomer', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to customer', () => {
        const output = mapToCustomer(data);

        expect(output).toEqual({
            customer_browser_info: navigator.userAgent,
            customer_email: data.customer.email,
            customer_first_name: data.customer.firstName,
            customer_geo_country_code: data.customer.geoCountryCode,
            customer_last_name: data.customer.lastName,
            customer_locale: data.store.storeLanguage,
            customer_name: data.customer.name,
            customer_phone: data.customer.phoneNumber,
            customer_reference: data.customer.email,
        });
    });
});
