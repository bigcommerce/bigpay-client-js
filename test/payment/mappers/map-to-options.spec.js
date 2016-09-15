import mapToOptions from '../../../src/payment/mappers/map-to-options';

describe('mapToOptions', () => {
    let inputData;

    beforeEach(() => {
        inputData = {
            cart: {
                handling: {
                    amount: 'cart.handling.amount',
                },
                items: [
                    {
                        id: 'cart.items[0].id',
                        name: 'cart.items[0].name',
                        quantity: 'cart.items[0].quantity',
                        sku: 'cart.items[0].sku',
                        amount: 'cart.items[0].amount',
                    },
                ],
                shipping: {
                    amount: 'cart.shipping.amount',
                },
                subTotal: {
                    amount: 'cart.subTotal.amount',
                },
                taxTotal: {
                    amount: 'cart.taxTotal.amount',
                },
            },
            customer: {
                customerId: 'customer.customerId',
            },
            store: {
                storeName: 'store.storeName',
            },
            payment: {
                deviceData: 'payment.deviceData',
            },
        };
    });

    it('should map to meta', () => {
        const data = mapToOptions(inputData);

        expect(data).toEqual({
            customer_id: 'customer.customerId',
            handling: 'cart.handling.amount',
            items: [
                {
                    code: 'cart.items[0].id',
                    name: 'cart.items[0].name',
                    quantity: 'cart.items[0].quantity',
                    sku: 'cart.items[0].sku',
                    value: 'cart.items[0].amount',
                },
            ],
            shipping: 'cart.shipping.amount',
            store_name: 'store.storeName',
            subtotal: 'cart.subTotal.amount',
            tax: 'cart.taxTotal.amount',
            token: 'payment.deviceData',
        });
    });
});
