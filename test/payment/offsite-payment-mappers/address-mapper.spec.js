import AddressMapper from '../../../src/payment/offsite-payment-mappers/address-mapper';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('AddressMapper', () => {
    let addressMapper;
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
        addressMapper = new AddressMapper();
    });

    it('creates an instance of AddressMapper', () => {
        const instance = AddressMapper.create();

        expect(instance instanceof AddressMapper).toBeTruthy();
    });

    it('maps the input data into a billing address object', () => {
        const output = addressMapper.mapToBillingAddress(data);

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

    it('maps the input data into a shipping address object', () => {
        const output = addressMapper.mapToShippingAddress(data);

        expect(output).toEqual({
            shipping_address_city: data.shippingAddress.city,
            shipping_address_company: data.shippingAddress.company,
            shipping_address_country_code: data.shippingAddress.countryCode,
            shipping_address_country: data.shippingAddress.country,
            shipping_address_first_name: data.shippingAddress.firstName,
            shipping_address_last_name: data.shippingAddress.lastName,
            shipping_address_phone: data.shippingAddress.phone,
            shipping_address_state_code: data.shippingAddress.provinceCode,
            shipping_address_state: data.shippingAddress.province,
            shipping_address_street_1: data.shippingAddress.addressLine1,
            shipping_address_street_2: data.shippingAddress.addressLine2,
            shipping_address_zip: data.shippingAddress.postCode,
        });
    });

    it('returns an empty object if the input does not contain a billing address', () => {
        expect(addressMapper.mapToBillingAddress({})).toEqual({});
    });

    it('returns an empty object if the input does not contain a shipping address', () => {
        expect(addressMapper.mapToShippingAddress({})).toEqual({});
    });
});
