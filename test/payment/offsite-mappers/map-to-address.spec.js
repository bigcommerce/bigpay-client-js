import mapToAddress from '../../../src/payment/offsite-mappers/map-to-address';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToAddress', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to billing address', () => {
        const output = mapToAddress(data, 'billingAddress');

        expect(output).toEqual({
            billing_address_city: data.billingAddress.city,
            billing_address_company: data.billingAddress.company,
            billing_address_country_code: data.billingAddress.countryCode,
            billing_address_country: data.billingAddress.country,
            billing_address_first_name: data.billingAddress.firstName,
            billing_address_last_name: data.billingAddress.lastName,
            billing_address_phone: data.billingAddress.phone,
            billing_address_state_code: data.billingAddress.provinceCode,
            billing_address_state: data.billingAddress.province,
            billing_address_street_1: data.billingAddress.addressLine1,
            billing_address_street_2: data.billingAddress.addressLine2,
            billing_address_zip: data.billingAddress.postCode,
        });
    });
});
