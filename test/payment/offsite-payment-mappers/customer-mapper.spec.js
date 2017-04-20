import CustomerMapper from '../../../src/payment/offsite-payment-mappers/customer-mapper';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('CustomerMapper', () => {
    let customerMapper;
    let data;

    beforeEach(() => {
        customerMapper = new CustomerMapper();
        data = paymentRequestDataMock;
    });

    it('creates an instance of CustomerMapper', () => {
        const instance = CustomerMapper.create();

        expect(instance instanceof CustomerMapper).toBeTruthy();
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

    it('returns an object containing only browser information if the input does not contain customer information', () => {
        expect(customerMapper.mapToCustomer({})).toEqual({
            customer_browser_info: jasmine.any(String),
        });
    });
});
