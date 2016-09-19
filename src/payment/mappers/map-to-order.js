import mapToBillingAddress from './map-to-billing-address';
import mapToItems from './map-to-items';
import mapToOrderTotals from './map-to-order-totals';
import mapToShippingAddress from './map-to-shipping-address';

/**
 * Map to order
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToOrder(data) {
    const { cart, order } = data;

    return {
        billing_address: mapToBillingAddress(data),
        currency: cart.currency,
        id: order.orderId,
        items: mapToItems(data),
        shipping_address: mapToShippingAddress(data),
        token: order.orderToken,
        totals: mapToOrderTotals(data),
    };
}
