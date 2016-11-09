import { PAYMENT_TYPES, initializeOffsitePayment, requestClientToken, submitPayment } from '../payment';

export default class Client {
    /**
     * Construct BigpayClient
     * @param {Object} config
     * @param {string} config.host
     */
    constructor({ host }) {
        this.host = host;
    }

    /**
     * Initialize offsite payment
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    initializeOffsitePayment(data, callback) {
        const { paymentMethod = {} } = data;
        const options = { host: this.host };

        if (paymentMethod.type !== PAYMENT_TYPES.HOSTED) {
            throw new Error(`${paymentMethod.type} is not supported.`);
        }

        initializeOffsitePayment(data, options, callback);
    }

    /**
     * Request client token
     * @param {Object} data
     * @param {Function} [callback]
     * @returns {void}
     */
    requestClientToken(data, callback) {
        const options = { host: this.host };

        requestClientToken(data, options, callback);
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
