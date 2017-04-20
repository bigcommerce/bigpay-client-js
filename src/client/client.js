import OffsitePaymentInitializer from '../payment/offsite-payment-initializer';
import PaymentSubmitter from '../payment/payment-submitter';

export default class Client {
    /**
     * Construct BigpayClient
     * @param {Object} config
     * @param {string} config.host
     */
    constructor(config) {
        this.host = config.host;
        this.offsitePaymentInitializer = OffsitePaymentInitializer.create(config);
        this.paymentSubmitter = PaymentSubmitter.create(config);
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
        this.paymentSubmitter.submitPayment(data, callback);
    }
}
