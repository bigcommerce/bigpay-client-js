import { validate } from '../../common/validation';

/**
 * Validate cart data
 * @param {CartData} cartData
 * @returns {Object}
 */
export default function validateCart(cartData) {
    return validate(cartData, {
        currency: ['required'],
        grandTotal: {
            integerAmount: ['required'],
        },
    });
}
