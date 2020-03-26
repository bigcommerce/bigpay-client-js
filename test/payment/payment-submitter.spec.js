import merge from 'lodash/merge';
import { HOSTED } from '../../src/payment/payment-types';
import paymentRequestDataMock from '../mocks/payment-request-data';
import PaymentSubmitter from '../../src/payment/payment-submitter';

describe('PaymentSubmitter', () => {
    let data;
    let payloadMapper;
    let paymentSubmitter;
    let requestSender;
    let transformedData;
    let transformedHeaders;
    let urlHelper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        transformedData = { body: 'hello world' };
        transformedHeaders = { AUTH_TOKEN: '123' };

        urlHelper = {
            getPaymentUrl: jest.fn(() => '/api/public/v1/payments/payment'),
        };

        requestSender = {
            postRequest: jest.fn(),
        };

        payloadMapper = {
            mapToPayload: jest.fn(() => transformedData),
            mapToHeaders: jest.fn(() => transformedHeaders),
        };

        paymentSubmitter = new PaymentSubmitter(urlHelper, requestSender, payloadMapper);
    });

    it('creates an instance of PaymentSubmitter', () => {
        const config = { host: 'https://bigpay.dev' };
        const instance = PaymentSubmitter.create(config);

        expect(instance instanceof PaymentSubmitter).toBeTruthy();
    });

    it('maps the input data into a payload object required for submitting a payment', () => {
        paymentSubmitter.submitPayment(data, () => {});

        expect(payloadMapper.mapToPayload).toHaveBeenCalled();
    });

    it('posts the request payload containing payment information to the server', () => {
        const callback = () => {};
        const url = urlHelper.getPaymentUrl();

        paymentSubmitter.submitPayment(data, callback);

        expect(requestSender.postRequest).toHaveBeenCalledWith(url, transformedData, { headers: transformedHeaders }, callback);
    });

    it('throws an error if the payment method is not an API provider', () => {
        data = merge({}, paymentRequestDataMock, {
            paymentMethod: {
                type: HOSTED,
            },
        });

        expect(() => paymentSubmitter.submitPayment(data)).toThrow();
    });

    it('throws an error if the input data does not contain payment method information', () => {
        expect(() => paymentSubmitter.submitPayment({})).toThrow();
    });
});
