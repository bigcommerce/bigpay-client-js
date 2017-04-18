import { BRAINTREE, BRAINTREE_PAYPAL } from '../payment-method-ids';

export default class PaymentMethodIdMapper {
    /**
     * @returns {PaymentMethodIdMapper}
     */
    static create() {
        return new PaymentMethodIdMapper();
    }

    /**
     * @param {PaymentMethod} paymentMethod
     * @returns {string}
     */
    mapToId(paymentMethod) {
        if (paymentMethod.id === BRAINTREE_PAYPAL) {
            return BRAINTREE;
        }

        return paymentMethod.id;
    }
}
