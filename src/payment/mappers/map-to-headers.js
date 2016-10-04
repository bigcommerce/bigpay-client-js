import { omitNil } from '../../common/utils';

/**
 * Map to headers
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToHeaders(data) {
    const { authToken } = data;

    return omitNil({
        Authorization: authToken,
    });
}
