import deepAssign from 'deep-assign';
import objectAssign from 'object-assign';
import { POST } from './method-types';
import DEFAULT_OPTIONS from './default-options';
import PayloadTransformer from './payload-transformer';
import RequestFactory from './request-factory';

export default class RequestSender {
    /**
     * @returns {RequestSender}
     */
    static create() {
        const requestFactory = RequestFactory.create();
        const payloadTransformer = PayloadTransformer.create();

        return new RequestSender(requestFactory, payloadTransformer);
    }

    /**
     * @param {RequestFactory} requestFactory
     * @param {PayloadTransformer} payloadTransformer
     */
    constructor(requestFactory, payloadTransformer) {
        /**
         * @private
         * @type {RequestFactory}
         */
        this.requestFactory = requestFactory;

        /**
         * @private
         * @type {PayloadTransformer}
         */
        this.payloadTransformer = payloadTransformer;
    }

    /**
     * @param {string} url
     * @param {Object} data
     * @param {Object} [options]
     * @param {Function} [callback]
     * @returns {void}
     */
    sendRequest(url, data, options, callback) {
        const mergedOptions = deepAssign({}, DEFAULT_OPTIONS, options);

        const xhr = this.requestFactory.createRequest(url, mergedOptions, (error) => {
            const response = this.payloadTransformer.fromResponse(xhr);

            if (!callback) {
                return;
            }

            if (error || !this.isSuccessfulRequest(xhr)) {
                callback(response);
                return;
            }

            callback(null, response);
        });

        const payload = this.payloadTransformer.toRequest(data, mergedOptions.headers['Content-Type']);

        xhr.send(payload);
    }

    /**
     * @param {string} url
     * @param {Object} data
     * @param {Object} [options]
     * @param {Function} [callback]
     * @returns {void}
     */
    postRequest(url, data, options, callback) {
        const mergedOptions = objectAssign({}, options, {
            method: POST,
        });

        this.sendRequest(url, data, mergedOptions, callback);
    }

    /**
     * @private
     * @param {XMLHttpRequest} xhr
     * @returns {boolean}
     */
    isSuccessfulRequest(xhr) {
        return xhr.status >= 200 && xhr.status < 300;
    }
}
