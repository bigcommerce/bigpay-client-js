import cloneDeep from 'lodash/cloneDeep';
import { HOSTED } from '../../src/payment/payment-types';
import * as paymentModule from '../../src/payment';
import Client from '../../src/client/client';
import OffsitePaymentInitializer from '../../src/payment/offsite-payment-initializer';
import paymentRequestDataMock from '../mocks/payment-request-data';

describe('Client', () => {
    let callback;
    let client;
    let config;
    let offsitePaymentInitializer;

    beforeEach(() => {
        callback = () => {};
        config = { host: 'https://bcapp.dev' };

        offsitePaymentInitializer = {
            initializeOffsitePayment: jasmine.createSpy('initializeOffsitePayment'),
        };

        spyOn(OffsitePaymentInitializer, 'create').and.returnValue(offsitePaymentInitializer);
        spyOn(paymentModule, 'submitPayment');
    });

    describe('construct', () => {
        it('should set host', () => {
            client = new Client(config);

            expect(client.host).toEqual(config.host);
        });
    });

    describe('initializeOffsitePayment', () => {
        let data;

        beforeEach(() => {
            client = new Client(config);
            data = cloneDeep(paymentRequestDataMock);
            data.paymentMethod.type = HOSTED;
        });

        it('should initialize offsite payment', () => {
            client.initializeOffsitePayment(data, callback);

            expect(offsitePaymentInitializer.initializeOffsitePayment).toHaveBeenCalledWith(data, callback);
        });
    });

    describe('submitPayment', () => {
        let data;

        beforeEach(() => {
            client = new Client(config);
            data = paymentRequestDataMock;
        });

        it('should submit payment', () => {
            const { submitPayment } = paymentModule;

            client.submitPayment(data, callback);

            expect(submitPayment).toHaveBeenCalledWith(data, { host: config.host }, callback);
        });
    });
});
