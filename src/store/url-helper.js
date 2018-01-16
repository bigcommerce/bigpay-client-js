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
     * @param {number} instrumentId
     * @returns {string}
     */
    getInstrumentByIdUrl(storeId, shopperId, instrumentId) {
        return `${this.host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments/${instrumentId}`;
    }
}
