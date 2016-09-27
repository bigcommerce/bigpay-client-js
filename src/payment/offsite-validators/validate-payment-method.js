import { validate } from '../../common/validation';

/**
 * Validate payment method
 * @param {CartData} paymentMethod
 * @returns {Object}
 */
export default function validatePaymentMethod(paymentMethod) {
    return validate(paymentMethod, {
        config: {
            redirectUrl: ['required'],
        },
        gateway: ['required'],
        id: ['required'],
    });
}
