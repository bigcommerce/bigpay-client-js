import mapToAddress from './map-to-address';

/**
 * Map to billing address
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToBillingAddress(inputData) {
    return mapToAddress(inputData, 'billingAddress');
}
