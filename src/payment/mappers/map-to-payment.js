import objectAssign from 'object-assign';
import { omitNil } from '../../common/utils';
import mapToCreditCard from './map-to-credit-card';

/**
 * Map to payment
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToPayment(data) {
    const { order = {}, payment = {}, paymentMethod = {}, quoteMeta = {} } = data;

    const payload = {
        device_info: quoteMeta.request ? quoteMeta.request.deviceSessionId : null,
        gateway: paymentMethod.id,
        notify_url: order.callbackUrl,
    };

    const nonce = payment.nonce || paymentMethod.nonce;

    if (nonce) {
        objectAssign(payload, {
            credit_card_token: {
                token: nonce,
            },
        });
    } else {
        objectAssign(payload, {
            credit_card: mapToCreditCard(data),
        });
    }

    return omitNil(payload);
}
