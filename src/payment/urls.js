/**
 * Get client token URL
 * @param {type} host
 * @returns {String}
 */
export function getClientTokenUrl(host) {
    return `${host}/api/public/v1/payments/client_tokens`;
}

/**
 * Get offsite payment URL
 * @param {string} host
 * @returns {string}
 */
export function getOffsitePaymentUrl(host) {
    return `${host}/pay/initialize`;
}

/**
 * Payment URL
 * @param {string} host
 * @returns {string}
 */
export function getPaymentUrl(host) {
    return `${host}/api/public/v1/orders/payments`;
}
