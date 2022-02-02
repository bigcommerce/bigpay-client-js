import objectAssign from 'object-assign';
import { omitNil, toNumber } from '../../../common/utils';

import PaymentMethodIdMapper from '../../payment-method-mappers/payment-method-id-mapper';

export default class PaymentMapper {
    /**
     * @param {PaymentMethodIdMapper} paymentMethodIdMapper
     * @returns {PaymentMapper}
     */
    static create() {
        const paymentMethodIdMapper = PaymentMethodIdMapper.create();

        return new PaymentMapper(paymentMethodIdMapper);
    }

    /**
     * @param {PaymentMethodIdMapper} paymentMethodIdMapper
     * @returns {void}
     */
    constructor(paymentMethodIdMapper) {
        /**
         * @private
         * @type {PaymentMethodIdMapper}
         */
        this.paymentMethodIdMapper = paymentMethodIdMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToPayment(data) {
        const {
            order = {},
            orderMeta = {},
            payment = {},
            paymentMethod = {},
        } = data;

        const payload = {
            device_info: payment.deviceSessionId ? payment.deviceSessionId : null,
            device: orderMeta.deviceFingerprint ? { fingerprint_id: orderMeta.deviceFingerprint } : null,
            gateway: this.paymentMethodIdMapper.mapToId(paymentMethod),
            notify_url: order.callbackUrl,
            return_url: paymentMethod.returnUrl || (order.payment ? order.payment.returnUrl : null),
            vault_payment_instrument: !payment.instrumentId ? payment.shouldSaveInstrument : null,
            set_as_default_stored_instrument: (payment.instrumentId || payment.shouldSaveInstrument) ? payment.shouldSetAsDefaultInstrument : null,
        };

        const { method } = paymentMethod;

        if (method) {
            objectAssign(payload, { method });
        }

        const nonce = payment.nonce || paymentMethod.nonce;

        if (payment.formattedPayload) {
            objectAssign(payload, payment.formattedPayload);
        } else if (payment.instrumentId) {
            objectAssign(payload, {
                bigpay_token: this.mapToBigPayToken(data),
            });
        } else if (nonce) {
            objectAssign(payload, {
                credit_card_token: {
                    token: nonce,
                },
            });
        } else if (payment.cryptogramId) {
            objectAssign(payload, {
                credit_card_cryptogram: this.mapToCryptogram(data),
            });
        } else {
            objectAssign(payload, {
                browser_info: payment.browser_info,
                credit_card: this.mapToCreditCard(data),
            });
        }

        return omitNil(payload);
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToCreditCard(data) {
        const { payment = {} } = data;

        return omitNil({
            account_name: payment.ccName,
            month: payment.ccExpiry ? toNumber(payment.ccExpiry.month) : null,
            number: payment.ccNumber,
            verification_value: payment.ccCvv,
            year: payment.ccExpiry ? toNumber(payment.ccExpiry.year) : null,
            customer_code: payment.ccCustomerCode,
            three_d_secure: payment.threeDSecure,
            hosted_form_nonce: payment.hostedFormNonce,
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @return {Object}
     */
    mapToBigPayToken({ payment }) {
        return omitNil({
            credit_card_number_confirmation: payment.ccNumber,
            token: payment.instrumentId,
            verification_value: payment.ccCvv,
            verification_nonce: payment.nonce,
            three_d_secure: payment.threeDSecure,
            hosted_form_nonce: payment.hostedFormNonce,
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @return {Object}
     */
    mapToCryptogram({ payment }) {
        return omitNil({
            payment_cryptogram: payment.cryptogramId,
            eci: payment.eci,
            xid: payment.transactionId,
            month: payment.ccExpiry ? toNumber(payment.ccExpiry.month) : null,
            number: payment.ccNumber,
            year: payment.ccExpiry ? toNumber(payment.ccExpiry.year) : null,
            account_mask: payment.accountMask,
        });
    }
}
