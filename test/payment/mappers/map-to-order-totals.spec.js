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
            grand_total: data.order.grandTotal.integerAmount,
            handling: data.order.handling.integerAmount,
            shipping: data.order.shipping.integerAmount,
            subtotal: data.order.subTotal.integerAmount,
            tax: data.order.taxTotal.integerAmount,
        });
    });
});
