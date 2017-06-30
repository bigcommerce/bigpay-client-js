import PaymentMethodIdMapper from '../../../src/payment/payment-method-mappers/payment-method-id-mapper';
import { MULTI_OPTION } from '../../../src/payment/payment-method-types';
import * as PAYMENT_METHODS from '../../../src/payment/payment-method-ids';

describe('PaymentMethodIdMapper', () => {
    let paymentMethod;
    let paymentMethodIdMapper;

    beforeEach(() => {
        paymentMethodIdMapper = new PaymentMethodIdMapper();
    });

    it('creates an instance of PaymentMethodIdMapper', () => {
        const instance = PaymentMethodIdMapper.create();

        expect(instance instanceof PaymentMethodIdMapper).toBeTruthy();
    });

    it('returns "braintree" if the payment method is "braintreepaypal"', () => {
        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE_PAYPAL };
        expect(paymentMethodIdMapper.mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);
    });

    it('returns the "gateway" field of the payment method if it is a multi-option method', () => {
        paymentMethod = {
            id: PAYMENT_METHODS.BRAINTREE_PAYPAL,
            gateway: 'Adyen',
            method: MULTI_OPTION,
        };

        expect(paymentMethodIdMapper.mapToId(paymentMethod)).toEqual('Adyen');
    });

    it('does not perform any mapping for other payment methods', () => {
        paymentMethod = { id: PAYMENT_METHODS.BRAINTREE };
        expect(paymentMethodIdMapper.mapToId(paymentMethod)).toEqual(PAYMENT_METHODS.BRAINTREE);
    });
});
