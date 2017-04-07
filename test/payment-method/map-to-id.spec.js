import mapToId from '../../src/payment-method/map-to-id';
import * as PAYMENT_METHODS from '../../src/payment-method/payment-methods';

describe('mapToId', () => {
    let paymentMethod;

    it('should map "braintreepaypal" to "braintree"', () => {
        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE_PAYPAL };
        expect(mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);
    });

    it('should map "protxvspdirect" to "sagepay"', () => {
        paymentMethod = { id: PAYMENT_METHODS.PROTX_VSP_DIRECT };
        expect(mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.SAGE_PAY);
    });

    it('should not do any mapping if it is not neccessary', () => {
        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE };
        expect(mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);
    });
});
