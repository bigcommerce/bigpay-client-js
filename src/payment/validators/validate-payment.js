import deepAssign from 'deep-assign';
import validateCreditCard from './validate-credit-card';
import { validate } from '../../common/validation';

/**
 * Validate payment
 * @param {Object} data
 * @returns {Object}
 */
export default function validatePayment(data) {
    const result = validate(data, {
        authToken: ['required'],
        cart: {
            currency: ['required'],
            grandTotal: {
                integerAmount: ['required'],
            },
            id: ['required'],
        },
        order: {
            orderId: ['required'],
        },
        store: {
            storeId: ['required'],
        },
    });

    return deepAssign(validateCreditCard(data), result);
}
