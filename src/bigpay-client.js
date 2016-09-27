import { PAYMENT_TYPES, initializeOffsitePayment, submitPayment } from './payment';

export default class BigpayClient {
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
     * @returns {Promise}
     */
    initializeOffsitePayment(data) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== PAYMENT_TYPES.HOSTED) {
            const error = new Error(`${data.type} is not supported.`);

            return Promise.reject(error);
        }

        return initializeOffsitePayment(data, { host: this.host });
    }

    /**
     * Submit payment
     * @param {PaymentRequestData} data
     * @returns {Promise}
     */
    submitPayment(data) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== PAYMENT_TYPES.API) {
            const error = new Error(`${data.type} is not supported.`);

            return Promise.reject(error);
        }

        return submitPayment(data, { host: this.host });
    }
}
