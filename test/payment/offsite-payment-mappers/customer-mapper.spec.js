import CustomerMapper from '../../../src/payment/offsite-payment-mappers/customer-mapper';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('CustomerMapper', () => {
    let customerMapper;
    let data;

    beforeEach(() => {
        customerMapper = new CustomerMapper();
        data = paymentRequestDataMock;
    });

    it('maps the input data into a customer object', () => {
        const output = customerMapper.mapToCustomer(data);

        expect(output).toEqual({
            customer_browser_info: navigator.userAgent,
            customer_email: data.customer.email,
            customer_first_name: data.customer.firstName,
            customer_geo_ip_country_code: data.quoteMeta.request.geoCountryCode,
            customer_last_name: data.customer.lastName,
            customer_locale: data.store.storeLanguage,
            customer_name: data.customer.name,
            customer_phone: data.customer.phoneNumber,
            customer_reference: data.customer.email,
        });
    });
});
