import mapToCustomer from './map-to-customer';
import mapToOrder from './map-to-order';
import mapToPayment from './map-to-payment';
import mapToStore from './map-to-store';

/**
 * Map to payload
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToPayload(data) {
    const { order = {} } = data;

    return {
        customer: mapToCustomer(data),
        notify_url: order.callbackUrl,
        order: mapToOrder(data),
        payment: mapToPayment(data),
        store: mapToStore(data),
    };
}
