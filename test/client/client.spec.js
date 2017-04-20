import cloneDeep from 'lodash/cloneDeep';
import { HOSTED } from '../../src/payment/payment-types';
import Client from '../../src/client/client';
import OffsitePaymentInitializer from '../../src/payment/offsite-payment-initializer';
import PaymentSubmitter from '../../src/payment/payment-submitter';
import paymentRequestDataMock from '../mocks/payment-request-data';

describe('Client', () => {
    let callback;
    let client;
    let config;
    let offsitePaymentInitializer;
    let paymentSubmitter;

    beforeEach(() => {
        callback = () => {};
        config = { host: 'https://bcapp.dev' };

        offsitePaymentInitializer = {
            initializeOffsitePayment: jasmine.createSpy('initializeOffsitePayment'),
        };

        paymentSubmitter = {
            submitPayment: jasmine.createSpy('submitPayment'),
        };

        spyOn(OffsitePaymentInitializer, 'create').and.returnValue(offsitePaymentInitializer);
        spyOn(PaymentSubmitter, 'create').and.returnValue(paymentSubmitter);
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
            client.submitPayment(data, callback);

            expect(paymentSubmitter.submitPayment).toHaveBeenCalledWith(data, callback);
        });
    });
});
