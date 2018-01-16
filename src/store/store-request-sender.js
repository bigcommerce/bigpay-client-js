import RequestSender from '../common/http-request/request-sender';
import { DELETE } from '../common/http-request/method-types';
import UrlHelper from './url-helper';
import { mapToHeaders, mapToInstrumentPayload } from './v2/mappers';

export default class StoreRequestSender {
    /**
     * @param {Object} config
     * @returns {StoreRequestSender}
     */
    static create(config) {
        const urlHelper = UrlHelper.create(config);
        const requestSender = RequestSender.create();

        return new StoreRequestSender(urlHelper, requestSender);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {RequestSender} requestSender
     * @returns {void}
     */
    constructor(urlHelper, requestSender) {
        /**
         * @private
         * @type {UrlHelper}
         */
        this.urlHelper = urlHelper;

        /**
         * @private
         * @type {RequestSender}
         */
        this.requestSender = requestSender;
    }

    /**
     * @param {Object} data
     * @param {Function} [callback]
     * @return {void}
     */
    getShopperInstruments(data, callback) {
        const url = this.urlHelper.getInstrumentsUrl(data.storeId, data.shopperId);
        const options = {
            headers: mapToHeaders(data),
        };

        this.requestSender.sendRequest(url, null, options, callback);
    }

    /**
     * @param {Object} data
     * @param {Function} [callback]
     * @return {void}
     */
    postShopperInstrument(data, callback) {
        const url = this.urlHelper.getInstrumentsUrl(data.storeId, data.shopperId);
        const payload = mapToInstrumentPayload(data);
        const options = {
            headers: mapToHeaders(data),
        };

        this.requestSender.postRequest(url, payload, options, callback);
    }

    /**
     * @param {Object} data
     * @param {Function} [callback]
     * @return {void}
     */
    deleteShopperInstrument(data, callback) {
        const url = this.urlHelper.getInstrumentByIdUrl(
            data.storeId,
            data.shopperId,
            data.instrumentId
        );
        const options = {
            method: DELETE,
            headers: mapToHeaders(data),
        };

        this.requestSender.sendRequest(url, null, options, callback);
    }
}
