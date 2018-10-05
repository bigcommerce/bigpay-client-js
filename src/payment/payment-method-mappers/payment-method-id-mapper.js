import { MULTI_OPTION } from '../payment-method-types';
import {
    BRAINTREE,
    BRAINTREE_GOOGLEPAY,
    BRAINTREE_PAYPAL,
    BRAINTREE_PAYPAL_CREDIT,
    BRAINTREE_VISACHECKOUT,
} from '../payment-method-ids';

/**
 * @param {string} id
 * @return {Boolean}
 */
function isBraintreePaymentMethod(id) {
    switch (id) {
    case BRAINTREE_PAYPAL:
    case BRAINTREE_PAYPAL_CREDIT:
    case BRAINTREE_VISACHECKOUT:
    case BRAINTREE_GOOGLEPAY:
        return true;
    default:
        return false;
    }
}

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
        let { id } = paymentMethod;

        if (paymentMethod.method === MULTI_OPTION) {
            id = paymentMethod.gateway;
        }

        if (isBraintreePaymentMethod(id)) {
            return BRAINTREE;
        }

        return id;
    }
}
