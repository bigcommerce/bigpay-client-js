import { HOSTED } from './payment-types';
import UrlHelper from './url-helper';

export default class HostedPaymentInitializer {
    /**
     * @param {Object} config
     * @returns {HostedPaymentInitializer}
     */
    static create(config) {
        const urlHelper = UrlHelper.create(config);

        return new HostedPaymentInitializer(urlHelper);
    }

    /**
     * @param {UrlHelper} urlHelper
     * @returns {void}
     */
    constructor(urlHelper) {
        /**
         * @private
         * @type {UrlHelper}
         */
        this.urlHelper = urlHelper;
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {string}
     * @throws {Error}
     */
    initializeHostedPayment(data){
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== HOSTED) {
            throw new Error(`${paymentMethod.type} is not supported.`);
        }
        return this.urlHelper.getOffsitePaymentUrl();
    }
}
