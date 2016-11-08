import { getPaymentSessionTokenUrl } from './urls';
import { postRequest } from '../common/http-request';
import { mapToHeaders, mapToPayload } from './session-token-mappers';

/**
 * Request payment session token
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @param {Function} [callback]
 * @returns {void}
 */
export default function requestPaymentSessionToken(data, { host } = {}, callback) {
    const payload = mapToPayload(data);
    const url = getPaymentSessionTokenUrl(host);
    const options = {
        headers: mapToHeaders(data),
    };

    postRequest(url, payload, options, callback);
}
