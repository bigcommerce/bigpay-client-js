import objectAssign from 'object-assign';
import mapToBillingAddress from './map-to-billing-address';
import mapToCustomer from './map-to-customer';
import mapToMeta from './map-to-meta';
import mapToShippingAddress from './map-to-shipping-address';
import mapToStore from './map-to-store';

/**
 * Map to payload
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToPayload(data) {
    const { authToken, cart = {}, order = {}, paymentMethod = {} } = data;

    return objectAssign(
        {
            amount: cart.grandTotal ? cart.grandTotal.integerAmount : undefined,
            bc_auth_token: authToken,
            currency: cart.currency,
            gateway: paymentMethod.gateway,
            notify_url: order.callbackUrl,
            order_id: order.id,
            page_title: document.title,
            payment_method_id: paymentMethod.id,
            reference_id: order.id,
            return_url: paymentMethod.config ? paymentMethod.config.redirectUrl : undefined,
        },
        mapToBillingAddress(data),
        mapToCustomer(data),
        mapToMeta(data),
        mapToShippingAddress(data),
        mapToStore(data)
    );
}
