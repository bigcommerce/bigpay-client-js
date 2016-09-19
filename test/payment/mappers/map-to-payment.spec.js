import * as mapToBillingAddressModule from '../../../src/payment/mappers/map-to-billing-address';
import * as mapToCreditCardModule from '../../../src/payment/mappers/map-to-credit-card';
import * as mapToMetaModule from '../../../src/payment/mappers/map-to-meta';
import * as mapToOptionsModule from '../../../src/payment/mappers/map-to-options';
import * as mapToShippingAddressModule from '../../../src/payment/mappers/map-to-shipping-address';
import mapToPayment from '../../../src/payment/mappers/map-to-payment';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToPayment', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;

        spyOn(mapToBillingAddressModule, 'default').and.returnValue('billingAddress');
        spyOn(mapToCreditCardModule, 'default').and.returnValue('creditCard');
        spyOn(mapToMetaModule, 'default').and.returnValue('meta');
        spyOn(mapToOptionsModule, 'default').and.returnValue('options');
        spyOn(mapToShippingAddressModule, 'default').and.returnValue('shippingAddress');
    });

    it('should map to payment', () => {
        const output = mapToPayment(data);

        expect(output).toEqual({
            amount: data.cart.grandTotal.integerAmount,
            billing_address: 'billingAddress',
            cart_id: data.cart.id,
            credit_card: 'creditCard',
            currency: data.cart.currency,
            gateway: data.paymentMethod.id,
            metadata: 'meta',
            notification_url: data.payment.callbackUrl,
            options: 'options',
            order_id: data.order.orderId,
            payment_method: data.paymentMethod.type,
            shipping_address: 'shippingAddress',
            store_hash: data.store.storeHash,
            store_id: data.store.storeId,
            token: data.payment.nouce,
        });
    });
});
