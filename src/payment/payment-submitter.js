import RequestSender from '../common/http-request/request-sender';
import { API, SDK } from './payment-types';
import PayloadMapper from './v1/payment-mappers/payload-mapper';
import PpsdkPayloadMapper from './ppsdk/payment-mappers/ppsdk-payload-mapper';
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
        const ppsdkPayloadMapper = PpsdkPayloadMapper.create();

        return new PaymentSubmitter(urlHelper, requestSender, payloadMapper, ppsdkPayloadMapper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {RequestSender} requestSender
     * @param {PayloadMapper} payloadMapper
     * @param {PpsdkPayloadMapper} ppsdkPayloadMapper
     * @returns {void}
     */
    constructor(urlHelper, requestSender, payloadMapper, ppsdkPayloadMapper) {
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

        /**
        * @private
        * @type {PpsdkPayloadMapper}
        */
        this.ppsdkPayloadMapper = ppsdkPayloadMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     * @throws {Error}
     */
    submitPayment(data, callback) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== API && paymentMethod.type !== SDK) {
            throw new Error(`${paymentMethod.type} is not supported.`);
        }

        const payload = paymentMethod.type === SDK ? this.ppsdkPayloadMapper.mapToPayload(data) : this.payloadMapper.mapToPayload(data);
        const url = paymentMethod.type === SDK ? this.urlHelper.getPpsdkPaymentUrl() : this.urlHelper.getPaymentUrl();
        const options = {
            headers: this.payloadMapper.mapToHeaders(data),
        };

        this.requestSender.postRequest(url, payload, options, callback);
    }
}
