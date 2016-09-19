import mapToOptions from '../../../src/payment/mappers/map-to-options';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToOptions', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to meta', () => {
        const output = mapToOptions(data);

        expect(output).toEqual({
            customer_id: data.customer.customerId,
            handling: data.cart.handling.amount,
            items: [
                {
                    code: data.cart.items[0].id,
                    name: data.cart.items[0].name,
                    quantity: data.cart.items[0].quantity,
                    sku: data.cart.items[0].sku,
                    value: data.cart.items[0].amount,
                },
            ],
            shipping: data.cart.shipping.amount,
            store_name: data.store.storeName,
            subtotal: data.cart.subTotal.amount,
            tax: data.cart.taxTotal.amount,
            token: data.payment.deviceData,
        });
    });
});
