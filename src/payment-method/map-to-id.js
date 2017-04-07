import { BRAINTREE, BRAINTREE_PAYPAL, PROTX_VSP_DIRECT, SAGE_PAY } from './payment-methods';

/**
 * Map to gateway
 * @param {PaymentMethod} paymentMethod
 * @returns {string}
 */
export default function mapToId(paymentMethod) {
    if (paymentMethod.id === BRAINTREE_PAYPAL) {
        return BRAINTREE;
    }

    if (paymentMethod.id === PROTX_VSP_DIRECT) {
        return SAGE_PAY;
    }

    return paymentMethod.id;
}
