import objectAssign from 'object-assign';
import { omitNil } from '../../common/utils';
import mapToCreditCard from './map-to-credit-card';

/**
 * Map to payment
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToPayment(data) {
    const { order = {}, payment = {}, paymentMethod = {} } = data;

    const payload = {
        device_info: payment.deviceData,
        gateway: paymentMethod.id,
        notify_url: order.callbackUrl,
    };

    if (payment.nonce) {
        objectAssign(payload, {
            credit_card_token: {
                token: payment.nonce,
            },
        });
    } else {
        objectAssign(payload, {
            credit_card: mapToCreditCard(data),
        });
    }

    return omitNil(payload);
}
