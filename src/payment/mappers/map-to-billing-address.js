import mapToAddress from './map-to-address';

/**
 * Map to billing address
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToBillingAddress(data) {
    const { customer = {} } = data;
    const address = mapToAddress(data, 'billingAddress');

    if (customer.email) {
        address.email = customer.email;
    }

    return address;
}
