export default class UrlHelper {
    /**
     * @param {Object} config
     * @param {string} config.host
     * @returns {CustomerMapper}
     */
    static create(config) {
        return new UrlHelper(config);
    }

    /**
     * @param {Object} config
     * @param {string} config.host
     * @returns {void}
     */
    constructor({ host }) {
        /**
         * @private
         * @type {string}
         */
        this.host = host;
    }

    /**
     * @returns {string}
     */
    getOffsitePaymentUrl() {
        return `${this.host}/pay/initialize`;
    }

    /**
     * @returns {string}
     */
    getPaymentUrl() {
        return `${this.host}/api/public/v1/orders/payments`;
    }

    /**
     * @returns {string}
     */
    getGenerateClientTokenUrl() {
        return `${this.host}/api/v2/public/payments/client_tokens`;
    }
}
