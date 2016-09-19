/**
 * Payment URL
 * @param {string} host
 * @returns {string}
 */
export function getPaymentUrl(host) {
    return `${host}/api/public/v1/payments/payment`;
}
