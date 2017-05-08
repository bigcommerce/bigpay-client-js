import paymentRequestDataMock from '../../../mocks/payment-request-data';
import CartMapper from '../../../../src/payment/v2/payment-mappers/cart-mapper';

describe('CartMapper', () => {
    let data;
    let cartMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        cartMapper = new CartMapper();
    });

    it('creates an instance of CartMapper', () => {
        const instance = CartMapper.create();

        expect(instance instanceof CartMapper).toBeTruthy();
    });

    it('maps the input data into a cart object', () => {
        const output = cartMapper.mapToCart(data);

        expect(output).toEqual({
            currency_code: data.cart.currency,
            items: data.cart.items.map(item => ({
                discount_amount: item.integerDiscount,
                name: item.name,
                price: item.integerAmount,
                quantity: item.quantity,
                sku: item.sku,
                tax_amount: item.integerTax,
                amount: item.integerAmountAfterDiscount,
                type: 'physical',
            })),
            totals: {
                discount_total: data.cart.discount.integerAmount,
                grand_total: data.cart.grandTotal.integerAmount,
                shipping_total: data.cart.shipping.integerAmount,
                subtotal: data.cart.subtotal.integerAmount,
                surcharge_total: data.cart.handling.integerAmount,
                tax_total: data.cart.taxTotal.integerAmount,
            },
        });
    });

    it('returns an empty object if the input does not contain cart information', () => {
        const output = cartMapper.mapToCart({});

        expect(output).toEqual({
            items: [],
            totals: {},
        });
    });
});
