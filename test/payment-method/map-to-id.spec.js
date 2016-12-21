import mapToId from '../../src/payment-method/map-to-id';
import * as PAYMENT_METHODS from '../../src/payment-method/payment-methods';

describe('mapToId', () => {
    let paymentMethod;

    it('should translate payment method id if neccessary', () => {
        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE_PAYPAL };
        expect(mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);

        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE };
        expect(mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);
    });
});
