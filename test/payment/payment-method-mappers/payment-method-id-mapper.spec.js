import PaymentMethodIdMapper from '../../../src/payment/payment-method-mappers/payment-method-id-mapper';
import * as PAYMENT_METHODS from '../../../src/payment/payment-method-ids';

describe('PaymentMethodIdMapper', () => {
    let paymentMethod;
    let paymentMethodIdMapper;

    beforeEach(() => {
        paymentMethodIdMapper = new PaymentMethodIdMapper();
    });

    it('returns "braintree" if the payment method is "braintreepaypal"', () => {
        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE_PAYPAL };
        expect(paymentMethodIdMapper.mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);
    });

    it('does not perform any mapping for other payment methods', () => {
        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE };
        expect(paymentMethodIdMapper.mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);
    });
});
