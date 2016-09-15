/**
 * Map to headers
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToHeaders(inputData) {
    const { authToken } = inputData;

    return {
        HTTP_AUTHORIZATION: authToken,
    };
}
