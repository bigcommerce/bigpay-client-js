import { getClientTokenUrl } from './urls';
import { postRequest } from '../common/http-request';
import { mapToHeaders, mapToPayload } from './client-token-mappers';

/**
 * Request client token
 * @param {Object} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @param {Function} [callback]
 * @returns {void}
 */
export default function requestClientToken(data, { host } = {}, callback) {
    const payload = mapToPayload(data);
    const url = getClientTokenUrl(host);
    const options = {
        headers: mapToHeaders(data),
    };

    postRequest(url, payload, options, callback);
}
