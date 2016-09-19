/**
 * Map to headers
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToHeaders(data) {
    const { authToken } = data;

    return {
        HTTP_AUTHORIZATION: authToken,
    };
}
