import { getPaymentUrl } from './urls';
import { postRequest } from '../common/http-request';
import { mapToHeaders, mapToPayload } from './mappers';

/**
 * Submit payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @returns {Promise}
 */
export default function submitPayment(data, { host } = {}) {
    const payload = mapToPayload(data);
    const url = getPaymentUrl(host);
    const options = {
        headers: mapToHeaders(data),
    };

    return postRequest(url, payload, options);
}
