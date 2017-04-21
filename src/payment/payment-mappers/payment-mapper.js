import objectAssign from 'object-assign';
import PaymentMethodIdMapper from '../payment-method-mappers/payment-method-id-mapper';
import { omitNil, toNumber } from '../../common/utils';

export default class PaymentMapper {
    /**
     * @param {PaymentMethodIdMapper} paymentMethodIdMapper
     * @returns {PaymentMapper}
     */
    static create() {
        const paymentMethodIdMapper = new PaymentMethodIdMapper();

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
        const { order = {}, payment = {}, paymentMethod = {}, quoteMeta = {} } = data;

        const payload = {
            device_info: quoteMeta.request ? quoteMeta.request.deviceSessionId : null,
            gateway: this.paymentMethodIdMapper.mapToId(paymentMethod),
            notify_url: order.callbackUrl,
            return_url: order.payment ? order.payment.returnUrl : null,
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
        });
    }
}
