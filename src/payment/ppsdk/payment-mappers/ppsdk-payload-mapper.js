import { omitNil, toNumber } from '../../../common/utils';
import { PPSDK_CREDIT_CARD } from '../../payment-method-types';

export default class PpsdkPayloadMapper {
    /**
     * @returns {PayloadMapper}
     */
    static create() {
        return new PpsdkPayloadMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToPayload(data) {
        const { additionalAction, payment = {}, paymentMethod } = data;

        return omitNil({
            instrument: {
                expires: {
                    month: payment.ccExpiry ? toNumber(payment.ccExpiry.month) : null,
                    year: payment.ccExpiry ? toNumber(payment.ccExpiry.year) : null,
                },
                name: payment.ccName,
                number: payment.ccNumber,
                verification_value: payment.ccCvv,
                type: PPSDK_CREDIT_CARD,
            },
            form_nonce: payment.hostedFormNonce,
            payment_method_id: paymentMethod.id,
            human_verification: additionalAction ? {
                id: 'recaptcha_v2_verification',
                parameters: {
                    token: additionalAction ? additionalAction.data.human_verification_token : null,
                },
            } : null,
        });
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToHeaders(data) {
        const { authToken } = data;

        return omitNil({
            Authorization: authToken,
        });
    }
}
