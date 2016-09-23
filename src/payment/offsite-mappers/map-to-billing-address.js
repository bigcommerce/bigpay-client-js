import mapToAddress from './map-to-address';

/**
 * Map to billing address
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToBillingAddress(data) {
    return mapToAddress(data, 'billingAddress');
}
