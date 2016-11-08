import cloneDeep from 'lodash/cloneDeep';
import { HOSTED } from '../../src/payment/payment-types';
import * as paymentModule from '../../src/payment';
import Client from '../../src/client/client';
import paymentRequestDataMock from '../mocks/payment-request-data';

describe('Client', () => {
    let callback;
    let client;
    let config;

    beforeEach(() => {
        callback = () => {};
        config = { host: 'https://bcapp.dev' };

        spyOn(paymentModule, 'initializeOffsitePayment');
        spyOn(paymentModule, 'submitPayment');
        spyOn(paymentModule, 'fetchPaymentSessionToken');
    });

    describe('construct', () => {
        it('should set host', () => {
            client = new Client(config);

            expect(client.host).toEqual(config.host);
        });
    });

    describe('fetchPaymentSessionToken', () => {
        let data;

        it('should request payment session token', () => {
            const { fetchPaymentSessionToken } = paymentModule;

            client.fetchPaymentSessionToken(data, callback);

            expect(fetchPaymentSessionToken).toHaveBeenCalledWith(data, { host: config.host }, callback);
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
            const { initializeOffsitePayment } = paymentModule;

            client.initializeOffsitePayment(data, callback);

            expect(initializeOffsitePayment).toHaveBeenCalledWith(data, { host: config.host }, callback);
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
