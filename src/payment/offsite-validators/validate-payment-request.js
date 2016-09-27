import { validateRequired } from '../../common/validation/validators';
import validateCart from './validate-cart';
import validatePaymentMethod from './validate-payment-method';
import validateOrder from './validate-order';
import validateStore from './validate-store';

/**
 * Validate payment request data
 * @param {PaymentRequestData} paymentRequestData
 * @returns {Object}
 */
export default function validatePaymentRequest(paymentRequestData) {
    const { authToken, cart, order, paymentMethod, store } = paymentRequestData;

    return {
        authToken: validateRequired(authToken),
        cart: validateCart(cart),
        order: validateOrder(order),
        paymentMethod: validatePaymentMethod(paymentMethod),
        store: validateStore(store),
    };
}
