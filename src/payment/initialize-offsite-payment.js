import { createFormPoster } from 'form-poster';
import { getOffsitePaymentUrl } from './urls';
import { mapToPayload } from './offsite-mappers';

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
    const formPoster = createFormPoster();

    formPoster.postForm(url, payload, callback);
}
