import BigpayClient from '../src/bigpay-client';
import * as paymentModule from '../src/payment';

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
        beforeEach(() => {
            bigpayClient = new BigpayClient(config);
        });

        it('should submit payment', () => {
            const data = { paymentMethod: { type: 'API' } };
            const { host } = config;
            const { submitPayment } = paymentModule;

            bigpayClient.submitPayment(data);

            expect(submitPayment).toHaveBeenCalledWith(data, { host });
        });
    });
});
