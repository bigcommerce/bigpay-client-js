import { validate } from '../../common/validation';

/**
 * Validate credit card
 * @param {Object} data
 * @returns {Object}
 */
export default function validateCreditCard(data) {
    return validate(data, {
        payment: {
            ccName: ['required'],
            ccNumber: ['required'],
            ccExpiry: {
                month: ['required'],
                year: ['required'],
            },
        },
    });
}
