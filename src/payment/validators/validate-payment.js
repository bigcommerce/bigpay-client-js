import { validate } from '../../common/validation';

/**
 * Validate payment data
 * @param {PaymentData} data
 * @returns {Object}
 */
export default function validatePayment(paymentData) {
    return validate(paymentData, {
        ccName: ['required'],
        ccNumber: ['required'],
        ccExpiry: {
            month: ['required'],
            year: ['required'],
        },
    });
}
