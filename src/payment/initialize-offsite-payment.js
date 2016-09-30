import { getOffsitePaymentUrl } from './urls';
import { mapToPayload } from './offsite-mappers';
import { postForm } from '../common/form-request';

/**
 * Initialize offsite payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @param {Function} [callback]
 * @returns {void}
 */
export default function initializeOffsitePayment(data, { host } = {}, callback) {
    const payload = mapToPayload(data);
    const url = getOffsitePaymentUrl(host);

    postForm(url, payload, callback);
}
