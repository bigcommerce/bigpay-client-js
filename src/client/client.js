import objectAssign from 'object-assign';
import OffsitePaymentInitializer from '../payment/offsite-payment-initializer';
import PaymentSubmitter from '../payment/payment-submitter';
import ClientTokenGenerator from '../payment/client-token-generator';
import StoreRequestSender from '../store/store-request-sender';
import DEFAULT_CONFIG from './default-config';
import PaymentIntentGenerator from '../payment/payment-intent-generator';

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
        const paymentIntentGenerator = PaymentIntentGenerator.create(clientConfig);

        return new Client(
            clientConfig,
            paymentSubmitter,
            offsitePaymentInitializer,
            clientTokenGenerator,
            storeRequestSender,
            paymentIntentGenerator
        );
    }

    /**
     * @param {Object} config
     * @param {PaymentSubmitter} paymentSubmitter
     * @param {OffsitePaymentInitializer} offsitePaymentInitializer
     * @param {ClientTokenGenerator} clientTokenGenerator
     * @param {StoreRequestSender} storeRequestSender
     * @param {PaymentIntentGenerator} paymentIntentGenerator
     */
    constructor(
        config,
        paymentSubmitter,
        offsitePaymentInitializer,
        clientTokenGenerator,
        storeRequestSender,
        paymentIntentGenerator
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

        /**
         * @private
         * @type {PaymentIntentGenerator}
         */
        this.paymentIntentGenerator = paymentIntentGenerator;
    }

    /**
     * @param {string} host
     * @returns {void}
     */
    setHost(host) {
        this.config.host = host;
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
     * @param {string} data.customerId
     * @param {string} data.currencyCode
     * @param {Function} [callback]
     * @return {void}
     */
    loadInstruments(data, callback) {
        this.storeRequestSender.loadInstruments(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.customerId
     * @param {string} data.currencyCode
     * @param {AddressData} data.shippingAddress
     * @param {Function} [callback]
     * @return {void}
     */
    loadInstrumentsWithAddress(data, callback) {
        this.storeRequestSender.loadInstrumentsWithAddress(data, callback);
    }

    /**
     * @param {Object} data
     * @param {string} data.storeId
     * @param {string} data.customerId
     * @param {string} data.currencyCode
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
     * @param {string} data.customerId
     * @param {string} data.instrumentId
     * @param {string} data.currencyCode
     * @param {Function} [callback]
     * @return {void}
     */
    deleteShopperInstrument(data, callback) {
        this.storeRequestSender.deleteShopperInstrument(data, callback);
    }

    /**
     * @param {PaymentRequestData} data
     * @param {Function} [callback]
     * @returns {void}
     */
    generatePaymentIntent(data, callback) {
        this.paymentIntentGenerator.generatePaymentIntent(data, callback);
    }
}
