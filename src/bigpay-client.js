import { PAYMENT_TYPES, submitPayment } from './payment';

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
     * Submit payment
     * @param {PaymentRequestData} data
     * @returns {Promise}
     */
    submitPayment(data) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type === PAYMENT_TYPES.HOSTED ||
            paymentMethod.type === PAYMENT_TYPES.OFFLINE) {
            const error = new Error(`${data.type} is not supported.`);

            return Promise.reject(error);
        }

        const options = { host: this.host };

        return submitPayment(data, options);
    }
}
