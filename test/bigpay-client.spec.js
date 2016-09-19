import * as paymentModule from '../src/payment';
import BigpayClient from '../src/bigpay-client';
import paymentRequestDataMock from './mocks/payment-request-data';

describe('BigpayClient', () => {
    let bigpayClient;
    let config;

    beforeEach(() => {
        config = { host: 'https://bcapp.dev' };

        spyOn(paymentModule, 'submitPayment');
    });

    describe('construct', () => {
        it('should set host', () => {
            bigpayClient = new BigpayClient(config);

            expect(bigpayClient.host).toEqual(config.host);
        });
    });

    describe('submitPayment', () => {
        let data;

        beforeEach(() => {
            bigpayClient = new BigpayClient(config);
            data = paymentRequestDataMock;
        });

        it('should submit payment', () => {
            const { submitPayment } = paymentModule;

            bigpayClient.submitPayment(data);

            expect(submitPayment).toHaveBeenCalledWith(data, { host: config.host });
        });
    });
});
