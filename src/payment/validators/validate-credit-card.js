import { validate } from '../../common/validation';

/**
 * Validate credit card
 * @param {Object} inputData
 * @returns {Object}
 */
export default function validateCreditCard(inputData) {
    return validate(inputData, {
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
