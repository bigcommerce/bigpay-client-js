import { getOffsitePaymentUrl } from './urls';
import { isValid } from '../common/validation';
import { mapToPayload } from './offsite-mappers';
import { postForm } from '../common/form-request';
import { validatePaymentRequest } from './offsite-validators';

/**
 * Initialize offsite payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @returns {Promise}
 */
export default function initializeOffsitePayment(data, { host } = {}) {
    const validation = validatePaymentRequest(data);

    if (!isValid(validation)) {
        return Promise.reject(new Error({ validation }));
    }

    const payload = mapToPayload(data);

    return postForm(getOffsitePaymentUrl(host), payload);
}
