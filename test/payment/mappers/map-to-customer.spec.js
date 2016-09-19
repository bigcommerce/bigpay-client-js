import mapToCustomer from '../../../src/payment/mappers/map-to-customer';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToCustomer', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to customer', () => {
        const output = mapToCustomer(data);

        expect(output).toEqual({
            geo_ip_country_code: data.customer.geoCountryCode,
            id: data.customer.customerId,
            session_token: data.customer.sessionToken,
        });
    });
});
