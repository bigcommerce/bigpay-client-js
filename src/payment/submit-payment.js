import { getPaymentUrl } from './urls';
import { postRequest } from '../common/http-request';
import { isValid } from '../common/validation';
import { mapToHeaders, mapToPayment } from './mappers';
import { validatePayment } from './validators';

/**
 * Submit payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @returns {Promise}
 */
export default function submitPayment(data, options = {}) {
    const validation = validatePayment(data);

    if (!isValid(validation)) {
        return Promise.reject(new Error({ validation }));
    }

    const paymentData = mapToPayment(data);
    const requestOptions = {
        headers: mapToHeaders(data),
    };

    return postRequest(getPaymentUrl(options.host), paymentData, requestOptions);
}
