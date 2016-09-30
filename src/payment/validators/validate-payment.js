import objectAssign from 'object-assign';
import { isValid, validate } from '../../common/validation';

/**
 * Validate payment data
 * @param {PaymentData} paymentData
 * @returns {Object}
 */
export default function validatePayment(paymentData) {
    const nouceValidation = validate(paymentData, {
        nouce: ['required'],
    });

    const creditCardValidation = validate(paymentData, {
        ccName: ['required'],
        ccNumber: ['required'],
        ccExpiry: {
            month: ['required'],
            year: ['required'],
        },
    });

    if (isValid(nouceValidation)) {
        return nouceValidation;
    }

    if (isValid(creditCardValidation)) {
        return creditCardValidation;
    }

    return objectAssign({}, nouceValidation, creditCardValidation);
}
