import RequestSender from '../common/http-request/request-sender';
import { getPaymentUrl } from './urls';
import { mapToHeaders, mapToPayload } from './mappers';

/**
 * Submit payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @param {Function} [callback]
 * @returns {void}
 */
export default function submitPayment(data, { host } = {}, callback) {
    const payload = mapToPayload(data);
    const url = getPaymentUrl(host);
    const options = {
        headers: mapToHeaders(data),
    };

    const requestSender = RequestSender.create();

    requestSender.postRequest(url, payload, options, callback);
}
