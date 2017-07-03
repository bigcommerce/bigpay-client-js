import objectAssign from 'object-assign';
import OffsitePaymentInitializer from '../payment/offsite-payment-initializer';
import PaymentSubmitter from '../payment/payment-submitter';
import DEFAULT_CONFIG from './default-config';

export default class Client {
    /**
     * @param {Object} config
     * @returns {Client}
     */
    static create(config) {
        const clientConfig = objectAssign({}, DEFAULT_CONFIG, config);
        const paymentSubmitter = PaymentSubmitter.create(clientConfig);
        const offsitePaymentInitializer = OffsitePaymentInitializer.create(clientConfig);

        return new Client(clientConfig, paymentSubmitter, offsitePaymentInitializer);
    }

    /**
     * @param {Object} config
     * @param {PaymentSubmitter} paymentSubmitter
     * @param {OffsitePaymentInitializer} offsitePaymentInitializer
     * @param {ClientTokenGenerator} clientTokenGenerator
     */
    constructor(config, paymentSubmitter, offsitePaymentInitializer, clientTokenGenerator) {
        /**
         * @private
         * @type {Object}
         */
        this.config = config;

        /**
         * @private
         * @type {PaymentSubmitter}
         */
        this.paymentSubmitter = paymentSubmitter;

        /**
         * @private
         * @type {OffsitePaymentInitializer}
         */
        this.offsitePaymentInitializer = offsitePaymentInitializer;

        /**
         * @private
         * @type {ClientTokenGenerator}
         */
        this.clientTokenGenerator = clientTokenGenerator;
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    initializeOffsitePayment(data, callback) {
        this.offsitePaymentInitializer.initializeOffsitePayment(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    submitPayment(data, callback) {
        this.paymentSubmitter.submitPayment(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    generateClientToken(data, callback) {
        this.clientTokenGenerator.generateClientToken(data, callback);
    }
}
