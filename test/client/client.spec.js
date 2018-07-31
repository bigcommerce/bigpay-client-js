import merge from 'lodash/merge';
import { HOSTED } from '../../src/payment/payment-types';
import Client from '../../src/client/client';
import paymentRequestDataMock from '../mocks/payment-request-data';
import { storeIntrumentDataMock, trustedShippingAddressesDataMock } from '../mocks/store-instrument-data';

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
            loadInstruments: jasmine.createSpy('loadInstruments'),
            loadInstrumentsWithAddresses: jasmine.createSpy('loadInstrumentsWithAddresses'),
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

    it('sets the host url after client creation', () => {
        const hostUrl = 'https://google.com';

        expect(client.config.host).toEqual(config.host);

        client.setHost(hostUrl);

        expect(client.config.host).toEqual(hostUrl);
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

    it('load instruments', () => {
        const callback = () => {};
        const data = storeIntrumentDataMock;

        client.loadInstruments(data, callback);

        expect(storeRequestSender.loadInstruments).toHaveBeenCalledWith(data, callback);
    });

    it('load instruments with shipping address', () => {
        const callback = () => {};
        const data = trustedShippingAddressesDataMock;

        client.loadInstrumentsWithAddresses(data, callback);

        expect(storeRequestSender.loadInstrumentsWithAddresses).toHaveBeenCalledWith(data, callback);
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
