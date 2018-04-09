import merge from 'lodash/merge';
import { HOSTED } from '../../src/payment/payment-types';
import Client from '../../src/client/client';
import paymentRequestDataMock from '../mocks/payment-request-data';
import { storeIntrumentDataMock, trustedShippingAddressDataMock } from '../mocks/store-instrument-data';

describe('Client', () => {
    let client;
    let clientTokenGenerator;
    let config;
    let offsitePaymentInitializer;
    let paymentSubmitter;
    let storeRequestSender;

    beforeEach(() => {
        config = { host: 'https://bigpay.dev' };

        paymentSubmitter = {
            submitPayment: jasmine.createSpy('submitPayment'),
        };

        offsitePaymentInitializer = {
            initializeOffsitePayment: jasmine.createSpy('initializeOffsitePayment'),
        };

        clientTokenGenerator = {
            generateClientToken: jasmine.createSpy('generateClientToken'),
        };

        storeRequestSender = {
            getShopperToken: jasmine.createSpy('getShopperToken'),
            getShopperInstruments: jasmine.createSpy('getShopperInstruments'),
            postTrustedShippingAddress: jasmine.createSpy('postTrustedShippingAddress'),
            postShopperInstrument: jasmine.createSpy('postShopperInstrument'),
            deleteShopperInstrument: jasmine.createSpy('deleteShopperInstrument'),
        };

        client = new Client(
            config,
            paymentSubmitter,
            offsitePaymentInitializer,
            clientTokenGenerator,
            storeRequestSender
        );
    });

    it('returns an instance of Client', () => {
        const instance = Client.create();

        expect(instance instanceof Client).toEqual(true);
    });

    it('initializes the offsite payment flow', () => {
        const callback = () => {};
        const data = merge({}, paymentRequestDataMock, {
            paymentMethod: {
                type: HOSTED,
            },
        });

        client.initializeOffsitePayment(data, callback);

        expect(offsitePaymentInitializer.initializeOffsitePayment).toHaveBeenCalledWith(data, callback);
    });

    it('submits the payment data', () => {
        const callback = () => {};
        const data = paymentRequestDataMock;

        client.submitPayment(data, callback);

        expect(paymentSubmitter.submitPayment).toHaveBeenCalledWith(data, callback);
    });

    it('generates a client token', () => {
        const callback = () => {};
        const data = paymentRequestDataMock;

        client.generateClientToken(data, callback);

        expect(clientTokenGenerator.generateClientToken).toHaveBeenCalledWith(data, callback);
    });

    it('request a shopper\'s instruments', () => {
        const callback = () => {};
        const data = storeIntrumentDataMock;

        client.getShopperInstruments(data, callback);

        expect(storeRequestSender.getShopperInstruments).toHaveBeenCalledWith(data, callback);
    });

    it('posts a trusted shipping address', () => {
        const callback = () => {};
        const data = trustedShippingAddressDataMock;

        client.postTrustedShippingAddress(data, callback);

        expect(storeRequestSender.postTrustedShippingAddress).toHaveBeenCalledWith(data, callback);
    });

    it('posts a new instrument', () => {
        const callback = () => {};
        const data = storeIntrumentDataMock;

        client.postShopperInstrument(data, callback);

        expect(storeRequestSender.postShopperInstrument).toHaveBeenCalledWith(data, callback);
    });

    it('deletes an instrument', () => {
        const callback = () => {};
        const data = storeIntrumentDataMock;

        client.deleteShopperInstrument(data, callback);

        expect(storeRequestSender.deleteShopperInstrument).toHaveBeenCalledWith(data, callback);
    });
});
