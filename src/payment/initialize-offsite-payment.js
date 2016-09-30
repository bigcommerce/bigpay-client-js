import { getOffsitePaymentUrl } from './urls';
import { mapToPayload } from './offsite-mappers';
import { postForm } from '../common/form-request';

/**
 * Initialize offsite payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @returns {Promise}
 */
export default function initializeOffsitePayment(data, { host } = {}) {
    const payload = mapToPayload(data);
    const url = getOffsitePaymentUrl(host);

    return postForm(url, payload);
}
