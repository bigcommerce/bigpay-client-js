import { omitNil, toString } from '../../common/utils';
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
    const { order } = data;

    return omitNil({
        billing_address: mapToBillingAddress(data),
        currency: order.currency,
        id: toString(order.orderId),
        items: mapToItems(data),
        shipping_address: mapToShippingAddress(data),
        token: order.token,
        totals: mapToOrderTotals(data),
    });
}
