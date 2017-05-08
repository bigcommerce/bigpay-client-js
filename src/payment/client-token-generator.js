import RequestSender from '../common/http-request/request-sender';
import ClientTokenMapper from './v2/payment-mappers/client-token-mapper';
import UrlHelper from './url-helper';

export default class ClientTokenGenerator {
    /**
     * @param {Object} config
     * @returns {PaymentSubmitter}
     */
    static create(config) {
        const urlHelper = UrlHelper.create(config);
        const requestSender = RequestSender.create();
        const clientTokenMapper = ClientTokenMapper.create();

        return new ClientTokenGenerator(urlHelper, requestSender, clientTokenMapper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {RequestSender} requestSender
     * @param {ClientTokenMapper} clientTokenMapper
     * @returns {void}
     */
    constructor(urlHelper, requestSender, clientTokenMapper) {
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
         * @type {ClientTokenMapper}
         */
        this.clientTokenMapper = clientTokenMapper;
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    generateClientToken(data, callback) {
        const url = this.urlHelper.getGenerateClientTokenUrl();
        const payload = this.clientTokenMapper.mapToClientToken(data);

        this.requestSender.postRequest(url, payload, {}, callback);
    }
}
