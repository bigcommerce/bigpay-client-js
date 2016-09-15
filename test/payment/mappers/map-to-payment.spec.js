import mapToPayment from '../../../src/payment/mappers/map-to-payment';
import * as mapToBillingAddressModule from '../../../src/payment/mappers/map-to-billing-address';
import * as mapToCreditCardModule from '../../../src/payment/mappers/map-to-credit-card';
import * as mapToMetaModule from '../../../src/payment/mappers/map-to-meta';
import * as mapToOptionsModule from '../../../src/payment/mappers/map-to-options';
import * as mapToShippingAddressModule from '../../../src/payment/mappers/map-to-shipping-address';

describe('mapToPayment', () => {
    let inputData;

    beforeEach(() => {
        inputData = {
            cart: {
                currency: 'cart.currency',
                grandTotal: {
                    integerAmount: 'cart.grandTotal.integerAmount',
                },
                id: 'cart.id',
            },
            payment: {
                callbackUrl: 'payment.callbackUrl',
                nouce: 'payment.nouce',
            },
            paymentMethod: {
                callbackUrl: 'paymentMethod.callbackUrl',
                id: 'paymentMethod.id',
                type: 'paymentMethod.type',
            },
            order: {
                orderId: 'order.orderId',
            },
            store: {
                storeHash: 'store.storeHash',
                storeId: 'store.storeId',
            },
        };

        spyOn(mapToBillingAddressModule, 'default').and.returnValue('billingAddress');
        spyOn(mapToCreditCardModule, 'default').and.returnValue('creditCard');
        spyOn(mapToMetaModule, 'default').and.returnValue('meta');
        spyOn(mapToOptionsModule, 'default').and.returnValue('options');
        spyOn(mapToShippingAddressModule, 'default').and.returnValue('shippingAddress');
    });

    it('should map to payment', () => {
        const data = mapToPayment(inputData);

        expect(data).toEqual({
            amount: 'cart.grandTotal.integerAmount',
            billing_address: 'billingAddress',
            cart_id: 'cart.id',
            credit_card: 'creditCard',
            currency: 'cart.currency',
            gateway: 'paymentMethod.id',
            metadata: 'meta',
            notification_url: 'payment.callbackUrl',
            options: 'options',
            order_id: 'order.orderId',
            payment_method: 'paymentMethod.type',
            shipping_address: 'shippingAddress',
            store_hash: 'store.storeHash',
            store_id: 'store.storeId',
            token: 'payment.nouce',
        });
    });
});
