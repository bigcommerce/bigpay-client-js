import { PAYMENT_TYPES, submitPayment } from '../payment';
import OffsitePaymentInitializer from '../payment/offsite-payment-initializer';

export default class Client {
    /**
     * Construct BigpayClient
     * @param {Object} config
     * @param {string} config.host
     */
    constructor(config) {
        this.host = config.host;
        this.offsitePaymentInitializer = OffsitePaymentInitializer.create(config);
    }

    /**
     * Initialize offsite payment
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    initializeOffsitePayment(data, callback) {
        this.offsitePaymentInitializer.initializeOffsitePayment(data, callback);
    }

    /**
     * Submit payment
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    submitPayment(data, callback) {
        const { paymentMethod = {} } = data;
        const options = { host: this.host };

        if (paymentMethod.type !== PAYMENT_TYPES.API) {
            throw new Error(`${paymentMethod.type} is not supported.`);
        }

        submitPayment(data, options, callback);
    }
}
