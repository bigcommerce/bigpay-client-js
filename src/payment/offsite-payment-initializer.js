import { createFormPoster } from '@bigcommerce/form-poster';
import { HOSTED } from './payment-types';
import PayloadMapper from './offsite-payment-mappers/payload-mapper';
import UrlHelper from './url-helper';

export default class OffsitePaymentInitializer {
    /**
     * @param {Object} config
     * @returns {OffsitePaymentInitializer}
     */
    static create(config) {
        const urlHelper = UrlHelper.create(config);
        const formPoster = createFormPoster();
        const payloadMapper = PayloadMapper.create();

        return new OffsitePaymentInitializer(urlHelper, formPoster, payloadMapper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @param {FormPoster} formPoster
     * @param {PayloadMapper} payloadMapper
     * @returns {void}
     */
    constructor(urlHelper, formPoster, payloadMapper) {
        /**
         * @private
         * @type {UrlHelper}
         */
        this.urlHelper = urlHelper;

        /**
         * @private
         * @type {FormPoster}
         */
        this.formPoster = formPoster;

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
    initializeOffsitePayment(data, callback) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== HOSTED) {
            throw new Error(`${paymentMethod.type} is not supported.`);
        }

        const payload = this.payloadMapper.mapToPayload(data);
        const url = this.urlHelper.getOffsitePaymentUrl();

        this.formPoster.postForm(url, payload, callback);
    }
}
