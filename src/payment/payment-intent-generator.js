import RequestSender from '../common/http-request/request-sender';
import UrlHelper from './url-helper';
import PaymentIntentMapper from './v2/payment-mappers/payment-intent-mapper';

export default class PaymentIntentGenerator {
    /**
     * @param {Object} config
     * @returns {PaymentSubmitter}
     */
    static create(config) {
        const urlHelper = UrlHelper.create(config);
        const requestSender = RequestSender.create();
        const paymentIntentMapper = PaymentIntentMapper.create();

        return new PaymentIntentGenerator(urlHelper, requestSender, paymentIntentMapper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {RequestSender} requestSender
     * @param {PaymentIntentMapper} paymentIntentMapper
     * @returns {void}
     */
    constructor(urlHelper, requestSender, paymentIntentMapper) {
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
         * @type {PaymentIntentMapper}
         */
        this.paymentIntentMapper = paymentIntentMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    generatePaymentIntent(data, callback) {
        const url = this.urlHelper.getGeneratePaymentIntentUrl();
        const payload = this.paymentIntentMapper.mapToPaymentIntent(data);

        this.requestSender.postRequest(url, payload, {}, callback);
    }
}
