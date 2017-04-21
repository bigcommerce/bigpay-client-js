import { API } from './payment-types';
import PayloadMapper from './payment-mappers/payload-mapper';
import RequestSender from '../common/http-request/request-sender';
import UrlHelper from './url-helper';

export default class PaymentSubmitter {
    /**
     * @param {Object} config
     * @returns {PaymentSubmitter}
     */
    static create(config) {
        const urlHelper = UrlHelper.create(config);
        const requestSender = RequestSender.create();
        const payloadMapper = PayloadMapper.create();

        return new PaymentSubmitter(urlHelper, requestSender, payloadMapper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {RequestSender} requestSender
     * @param {PayloadMapper} payloadMapper
     * @returns {void}
     */
    constructor(urlHelper, requestSender, payloadMapper) {
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

        /**
         * @private
         * @type {PayloadMapper}
         */
        this.payloadMapper = payloadMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     * @throws {Error}
     */
    submitPayment(data, callback) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== API) {
            throw new Error(`${paymentMethod.type} is not supported.`);
        }

        const payload = this.payloadMapper.mapToPayload(data);
        const url = this.urlHelper.getPaymentUrl();
        const options = {
            headers: this.payloadMapper.mapToHeaders(data),
        };

        this.requestSender.postRequest(url, payload, options, callback);
    }
}
