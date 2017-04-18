export default class UrlHelper {
    /**
     * @param {string} host
     * @returns {CustomerMapper}
     */
    static create(host) {
        return new UrlHelper(host);
    }

    /**
     * @param {string} host
     * @returns {void}
     */
    constructor(host) {
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
}
