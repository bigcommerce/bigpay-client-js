import { getPaymentSessionTokenUrl } from './urls';
import { postRequest } from '../common/http-request';
import { mapToHeaders, mapToPayload } from './session-token-mappers';

export default function fetchPaymentSessionToken(data, { host } = {}, callback) {
    const payload = mapToPayload(data);
    const url = getPaymentSessionTokenUrl(host);
    const options = {
        headers: mapToHeaders(data),
    };

    postRequest(url, payload, options, callback);
}
