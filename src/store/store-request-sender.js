import RequestSender from '../common/http-request/request-sender';
import { DELETE } from '../common/http-request/method-types';
import UrlHelper from './url-helper';
import {
    mapToHeaders,
    mapToInstrumentPayload,
} from './v2/mappers';

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

    getShopperToken(data, callback) {
        const {
            storeId,
            shopperId,
        } = data;

        const url = this.urlHelper.getTokenUrl(storeId, shopperId);
        const options = {
            headers: mapToHeaders(data),
        };

        this.requestSender.postRequest(url, null, options, callback);
    }

    getShopperInstruments(data, callback) {
        const {
            storeId,
            shopperId,
        } = data;

        const url = this.urlHelper.getInstrumentsUrl(storeId, shopperId);
        const options = {
            headers: mapToHeaders(data),
        };

        this.requestSender.sendRequest(url, null, options, callback);
    }

    postShopperInstrument(data, callback) {
        const {
            storeId,
            shopperId,
        } = data;

        const url = this.urlHelper.getInstrumentsUrl(storeId, shopperId);
        const payload = mapToInstrumentPayload(data);
        const options = {
            headers: mapToHeaders(data),
        };

        this.requestSender.postRequest(url, payload, options, callback);
    }

    deleteShopperInstrument(data, callback) {
        const {
            instrumentId,
            shopperId,
            storeId,
        } = data;

        const url = this.urlHelper.getInstrumentByIdUrl(storeId, shopperId, instrumentId);
        const options = {
            method: DELETE,
            headers: mapToHeaders(data),
        };

        this.requestSender.sendRequest(url, null, options, callback);
    }
}
