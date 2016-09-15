import mapToAddress from './map-to-address';

/**
 * Map to shipping address
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToShippingAddress(inputData) {
    return mapToAddress(inputData, 'shippingAddress');
}
