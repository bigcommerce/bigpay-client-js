import { BRAINTREE, BRAINTREE_PAYPAL } from './payment-methods';

/**
 * Map to gateway
 * @param {PaymentMethod} paymentMethod
 * @returns {string}
 */
export default function mapToId(paymentMethod) {
    if (paymentMethod.id === BRAINTREE_PAYPAL) {
        return BRAINTREE;
    }

    return paymentMethod.id;
}
