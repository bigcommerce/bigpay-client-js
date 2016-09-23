import { validate } from '../../common/validation';

/**
 * Validate order data
 * @param {OrderData} orderData
 * @returns {Object}
 */
export default function validateOrder(orderData) {
    return validate(orderData, {
        callbackUrl: ['required'],
        orderId: ['required'],
    });
}
