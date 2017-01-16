import mapToAddress from '../../../src/payment/mappers/map-to-address';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToAddress', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to shipping address', () => {
        const output = mapToAddress(data, 'shippingAddress');

        expect(output).toEqual({
            city: data.shippingAddress.city,
            company: data.shippingAddress.company,
            country_code: data.shippingAddress.countryCode,
            country: data.shippingAddress.country,
            first_name: data.shippingAddress.firstName,
            last_name: data.shippingAddress.lastName,
            phone: data.shippingAddress.phone,
            state_code: data.shippingAddress.provinceCode,
            state: data.shippingAddress.province,
            street_1: data.shippingAddress.addressLine1,
            street_2: data.shippingAddress.addressLine2,
            zip: data.shippingAddress.postCode,
        });
    });
});
