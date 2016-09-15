import mapToBillingAddress from './map-to-billing-address';
import mapToCreditCard from './map-to-credit-card';
import mapToMeta from './map-to-meta';
import mapToOptions from './map-to-options';
import mapToShippingAddress from './map-to-shipping-address';

/**
 * Map to payment
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToPayment(inputData) {
    const { cart = {}, order = {}, payment = {}, paymentMethod = {}, store = {} } = inputData;
    const billingAddressData = mapToBillingAddress(inputData);
    const creditCardData = mapToCreditCard(inputData);
    const metaData = mapToMeta(inputData);
    const optionsData = mapToOptions(inputData);
    const shippingAddressData = mapToShippingAddress(inputData);

    return {
        amount: cart.grandTotal ? cart.grandTotal.integerAmount : undefined,
        billing_address: billingAddressData,
        cart_id: cart.id,
        credit_card: creditCardData,
        currency: cart.currency,
        gateway: paymentMethod.id,
        metadata: metaData,
        notification_url: payment.callbackUrl,
        options: optionsData,
        order_id: order.orderId,
        payment_method: paymentMethod.type,
        shipping_address: shippingAddressData,
        store_hash: store.storeHash,
        store_id: store.storeId,
        token: payment.nouce,
    };
}
