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
    constructor(config) {
        /**
         * @private
         * @type {Object}
         */
        this.config = config;
    }

    /**
     * @private
     * @returns {string}
     * @throws {Error}
     */
    get host() {
        if (!this.config || !this.config.host) {
            throw new Error('Host URL unavailable or not supplied.');
        }

        return this.config.host;
    }

    /**
     * @param {number} storeId
     * @param {number} customerId
     * @param {string} currencyCode
     * @returns {string}
     */
    getInstrumentsUrl(storeId, customerId, currencyCode) {
        return `${this.host}/api/v3/stores/${storeId}/shoppers/${customerId}/instruments?currency_code=${currencyCode}`;
    }

    /**
     * @param {number} storeId
     * @param {number} customerId
     * @param {string} currencyCode
     * @return {string}
     */
    getTrustedShippingAddressUrl(storeId, customerId, currencyCode) {
        return `${this.host}/api/v3/stores/${storeId}/shoppers/${customerId}/instruments/trusted_shipping_address?currency_code=${currencyCode}`;
    }

    /**
     * @param {number} storeId
     * @param {number} customerId
     * @param {number} instrumentId
     * @returns {string}
     */
    getInstrumentByIdUrl(storeId, customerId, instrumentId) {
        return `${this.host}/api/v2/stores/${storeId}/shoppers/${customerId}/instruments/${instrumentId}`;
    }
}
