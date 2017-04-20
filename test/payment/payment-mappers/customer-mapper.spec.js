import CustomerMapper from '../../../src/payment/payment-mappers/customer-mapper';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('CustomerMapper', () => {
    let customerMapper;
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
        customerMapper = new CustomerMapper();
    });

    it('creates an instance of CustomerMapper', () => {
        const instance = CustomerMapper.create();

        expect(instance instanceof CustomerMapper).toBeTruthy();
    });

    it('maps the input data into a customer object', () => {
        const output = customerMapper.mapToCustomer(data);

        expect(output).toEqual({
            geo_ip_country_code: data.quoteMeta.request.geoCountryCode,
            id: `${data.customer.customerId}`,
            session_token: data.quoteMeta.request.sessionHash,
        });
    });

    it('returns an empty object if the input does not contain customer information', () => {
        expect(customerMapper.mapToCustomer({})).toEqual({});
    });
});
