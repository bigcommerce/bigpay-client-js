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
     * @param {number} shopperId
     * @returns {string}
     */
    getInstrumentsUrl(storeId, shopperId) {
        return `${this.host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments`;
    }

    /**
     * @param {number} storeId
     * @param {number} shopperId
     * @return {string}
     */
    getTrustedShippingAddressUrl(storeId, shopperId) {
        return `${this.host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments/trusted_shipping_address`;
    }

    /**
     * @param {number} storeId
     * @param {number} shopperId
     * @param {number} instrumentId
     * @returns {string}
     */
    getInstrumentByIdUrl(storeId, shopperId, instrumentId) {
        return `${this.host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments/${instrumentId}`;
    }
}
