import cloneDeep from 'lodash/cloneDeep';
import { HOSTED } from '../../src/payment/payment-types';
import * as paymentModule from '../../src/payment';
import Client from '../../src/client/client';
import paymentRequestDataMock from '../mocks/payment-request-data';

describe('Client', () => {
    let bigpayClient;
    let config;

    beforeEach(() => {
        config = { host: 'https://bcapp.dev' };

        spyOn(paymentModule, 'initializeOffsitePayment');
        spyOn(paymentModule, 'submitPayment');
    });

    describe('construct', () => {
        it('should set host', () => {
            bigpayClient = new Client(config);

            expect(bigpayClient.host).toEqual(config.host);
        });
    });

    describe('initializeOffsitePayment', () => {
        let data;

        beforeEach(() => {
            bigpayClient = new Client(config);
            data = cloneDeep(paymentRequestDataMock);
            data.paymentMethod.type = HOSTED;
        });

        it('should initialize offsite payment', () => {
            const { initializeOffsitePayment } = paymentModule;

            bigpayClient.initializeOffsitePayment(data);

            expect(initializeOffsitePayment).toHaveBeenCalledWith(data, { host: config.host });
        });
    });

    describe('submitPayment', () => {
        let data;

        beforeEach(() => {
            bigpayClient = new Client(config);
            data = paymentRequestDataMock;
        });

        it('should submit payment', () => {
            const { submitPayment } = paymentModule;

            bigpayClient.submitPayment(data);

            expect(submitPayment).toHaveBeenCalledWith(data, { host: config.host });
        });
    });
});
