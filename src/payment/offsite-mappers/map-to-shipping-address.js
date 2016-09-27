import mapToAddress from './map-to-address';

/**
 * Map to shipping address
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToShippingAddress(data) {
    return mapToAddress(data, 'shippingAddress');
}
