import merge from 'lodash/merge';
import { HOSTED } from '../../src/payment/payment-types';
import Client from '../../src/client/client';
import paymentRequestDataMock from '../mocks/payment-request-data';

describe('Client', () => {
    let client;
    let config;
    let paymentSubmitter;
    let offsitePaymentInitializer;

    beforeEach(() => {
        config = { host: 'https://bcapp.dev' };

        paymentSubmitter = {
            submitPayment: jasmine.createSpy('submitPayment'),
        };

        offsitePaymentInitializer = {
            initializeOffsitePayment: jasmine.createSpy('initializeOffsitePayment'),
        };

        client = new Client(config, paymentSubmitter, offsitePaymentInitializer);
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
});
