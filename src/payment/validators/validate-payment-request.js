import { validateRequired } from '../../common/validation/validators';
import validateCart from './validate-cart';
import validateOrder from './validate-order';
import validatePayment from './validate-payment';
import validateStore from './validate-store';

/**
 * Validate payment request data
 * @param {PaymentRequestData} paymentRequestData
 * @returns {Object}
 */
export default function validatePaymentRequestData(paymentRequestData) {
    const { authToken, cart, order, payment, store } = paymentRequestData;

    return {
        authToken: validateRequired(authToken),
        cart: validateCart(cart),
        order: validateOrder(order),
        payment: validatePayment(payment),
        store: validateStore(store),
    };
}
