import mapToCreditCard from './map-to-credit-card';

/**
 * Map to payment
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToPayment(data) {
    const { order = {}, payment = {}, paymentMethod = {} } = data;

    return {
        credit_card_token: {
            token: payment.nouce,
        },
        credit_card: mapToCreditCard(data),
        device_info: payment.deviceData,
        gateway: paymentMethod.id,
        notify_url: order.callbackUrl,
    };
}
