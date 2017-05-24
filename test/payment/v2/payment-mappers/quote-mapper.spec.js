import paymentRequestDataMock from '../../../mocks/payment-request-data';
import QuoteMapper from '../../../../src/payment/v2/payment-mappers/quote-mapper';

describe('QuoteMapper', () => {
    let data;
    let quoteMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        quoteMapper = new QuoteMapper();
    });

    it('creates an instance of QuoteMapper', () => {
        const instance = QuoteMapper.create();

        expect(instance instanceof QuoteMapper).toBeTruthy();
    });

    it('maps the input data into a quote object', () => {
        const output = quoteMapper.mapToQuote(data);

        expect(output).toEqual({
            billing_address: {
                address_line_1: data.billingAddress.addressLine1,
                address_line_2: data.billingAddress.addressLine2,
                city: data.billingAddress.city,
                company: data.billingAddress.company,
                country_code: data.billingAddress.countryCode,
                email: data.customer.email,
                first_name: data.billingAddress.firstName,
                last_name: data.billingAddress.lastName,
                phone: data.billingAddress.phone,
                postal_code: data.billingAddress.postCode,
                state: data.billingAddress.province,
            },
            shipping_address: {
                address_line_1: data.shippingAddress.addressLine1,
                address_line_2: data.shippingAddress.addressLine2,
                city: data.shippingAddress.city,
                company: data.shippingAddress.company,
                country_code: data.shippingAddress.countryCode,
                email: data.customer.email,
                first_name: data.shippingAddress.firstName,
                last_name: data.shippingAddress.lastName,
                phone: data.shippingAddress.phone,
                postal_code: data.shippingAddress.postCode,
                state: data.shippingAddress.province,
            },
        });
    });

    it('returns an empty object if the input does not contain quote information', () => {
        const output = quoteMapper.mapToQuote({});

        expect(output).toEqual({
            billing_address: {},
            shipping_address: {},
        });
    });
});
