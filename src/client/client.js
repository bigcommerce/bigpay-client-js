import objectAssign from 'object-assign';
import OffsitePaymentInitializer from '../payment/offsite-payment-initializer';
import PaymentSubmitter from '../payment/payment-submitter';
import ClientTokenGenerator from '../payment/client-token-generator';
import StoreRequestSender from '../store/store-request-sender';
import DEFAULT_CONFIG from './default-config';

export default class Client {
    /**
     * @param {Object} config
     * @returns {Client}
     */
    static create(config) {
        const clientConfig = objectAssign({}, DEFAULT_CONFIG, config);
        const offsitePaymentInitializer = OffsitePaymentInitializer.create(clientConfig);
        const paymentSubmitter = PaymentSubmitter.create(clientConfig);
        const clientTokenGenerator = ClientTokenGenerator.create(clientConfig);
        const storeRequestSender = StoreRequestSender.create(clientConfig);

        return new Client(
            clientConfig,
            paymentSubmitter,
            offsitePaymentInitializer,
            clientTokenGenerator,
            storeRequestSender
        );
    }

    /**
     * @param {Object} config
     * @param {PaymentSubmitter} paymentSubmitter
     * @param {OffsitePaymentInitializer} offsitePaymentInitializer
     * @param {ClientTokenGenerator} clientTokenGenerator
     * @param {StoreRequestSender} storeRequestSender
     */
    constructor(
        config,
        paymentSubmitter,
        offsitePaymentInitializer,
        clientTokenGenerator,
        storeRequestSender
    ) {
        /**
         * @private
         * @type {Object}
         */
        this.config = config;

        /**
         * @private
         * @type {PaymentSubmitter}
         */
        this.paymentSubmitter = paymentSubmitter;

        /**
         * @private
         * @type {OffsitePaymentInitializer}
         */
        this.offsitePaymentInitializer = offsitePaymentInitializer;

        /**
         * @private
         * @type {ClientTokenGenerator}
         */
        this.clientTokenGenerator = clientTokenGenerator;

        /**
         * @private
         * @type {StoreRequestSender}
         */
        this.storeRequestSender = storeRequestSender;
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    initializeOffsitePayment(data, callback) {
        this.offsitePaymentInitializer.initializeOffsitePayment(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    submitPayment(data, callback) {
        this.paymentSubmitter.submitPayment(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    generateClientToken(data, callback) {
        this.clientTokenGenerator.generateClientToken(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {Function} [callback]
     * @return {void}
     */
    getShopperToken(data, callback) {
        this.storeRequestSender.getShopperToken(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {Function} [callback]
     * @return {void}
     */
    getShopperInstruments(data, callback) {
        this.storeRequestSender.getShopperInstruments(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {CreditCard} data.creditCard
     * @param {AddressData} data.billingAddress
     * @param {boolean} data.defaultInstrument
     * @param {string} data.providerName
     * @param {Function} [callback]
     * @return {void}
     */
    postShopperInstrument(data, callback) {
        this.storeRequestSender.postShopperInstrument(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.shopperId
     * @param {string} data.instrumentId
     * @param {Function} [callback]
     * @return {void}
     */
    deleteShopperInstrument(data, callback) {
        this.storeRequestSender.deleteShopperInstrument(data, callback);
    }
}
