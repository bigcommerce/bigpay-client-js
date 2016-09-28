import mapToItems from '../../../src/payment/mappers/map-to-items';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToItems', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to items', () => {
        const output = mapToItems(data);

        expect(output).toEqual([
            {
                code: data.cart.items[0].id,
                name: data.cart.items[0].name,
                price: data.cart.items[0].amount,
                quantity: data.cart.items[0].quantity,
                sku: data.cart.items[0].sku,
            },
        ]);
    });
});
