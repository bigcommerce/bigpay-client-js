import _ from 'lodash';
import OrderMapper from '../../../../src/payment/v1/payment-mappers/order-mapper';
import paymentRequestDataMock from '../../../mocks/payment-request-data';

describe('OrderMapper', () => {
    let data;
    let orderMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        orderMapper = new OrderMapper();
    });

    it('creates an instance of OrderMapper', () => {
        const instance = OrderMapper.create();

        expect(instance instanceof OrderMapper).toBeTruthy();
    });

    it('removes empty fields from billing address', () => {
        const mockData = _.cloneDeep(paymentRequestDataMock);
        mockData.billingAddress.company = '';
        mockData.billingAddress.phone = '';
        mockData.billingAddress.addressLine2 = '';

        const output = orderMapper.mapToOrder(mockData);

        expect(output.billing_address).toEqual({
            city: data.billingAddress.city,
            country_code: data.billingAddress.countryCode,
            country: data.billingAddress.country,
            email: data.customer.email,
            first_name: data.billingAddress.firstName,
            last_name: data.billingAddress.lastName,
            state_code: data.billingAddress.provinceCode,
            state: data.billingAddress.province,
            street_1: data.billingAddress.addressLine1,
            zip: data.billingAddress.postCode,
        });
    });

    it('maps the input data into an order object', () => {
        const output = orderMapper.mapToOrder(data);

        expect(output).toEqual({
            billing_address: {
                city: data.billingAddress.city,
                company: data.billingAddress.company,
                country_code: data.billingAddress.countryCode,
                country: data.billingAddress.country,
                email: data.customer.email,
                first_name: data.billingAddress.firstName,
                last_name: data.billingAddress.lastName,
                phone: data.billingAddress.phone,
                state_code: data.billingAddress.provinceCode,
                state: data.billingAddress.province,
                street_1: data.billingAddress.addressLine1,
                street_2: data.billingAddress.addressLine2,
                zip: data.billingAddress.postCode,
            },
            currency: data.order.currency,
            id: `${data.order.orderId}`,
            items: [
                {
                    code: data.cart.items[0].id,
                    name: data.cart.items[0].name,
                    price: data.cart.items[0].integerAmount,
                    variant_id: data.cart.items[0].variantId,
                    quantity: data.cart.items[0].quantity,
                    sku: data.cart.items[0].sku,
                },
            ],
            shipping: [{
                method: data.shippingOption.description,
                transit_time: data.shippingOption.transitTime,
            }],
            shipping_address: {
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
            },
            coupons: [{
                code: data.order.coupon.coupons[0].code,
            }],
            totals: {
                grand_total: data.order.grandTotal.integerAmount,
                handling: data.order.handling.integerAmount,
                shipping: data.order.shipping.integerAmount,
                subtotal: data.order.subtotal.integerAmount,
                tax: data.order.taxTotal.integerAmount,
            },
            token: data.order.token,
        });
    });

    it('returns an empty object if the input does not contain order information', () => {
        expect(orderMapper.mapToOrder({})).toEqual({
            coupons: [],
            billing_address: {},
            items: [],
            shipping: [],
            shipping_address: {},
            totals: {},
        });
    });
});
