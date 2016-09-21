import mapToOrderTotals from '../../../src/payment/mappers/map-to-order-totals';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToOrderTotals', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to order totals', () => {
        const output = mapToOrderTotals(data);

        expect(output).toEqual({
            grand_total: data.cart.grandTotal.integerAmount,
            handling: data.cart.handling.amount,
            shipping: data.cart.shipping.amount,
            subtotal: data.cart.subTotal.amount,
            tax: data.cart.taxTotal.amount,
        });
    });
});
