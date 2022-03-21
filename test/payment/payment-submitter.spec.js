import merge from 'lodash/merge';
import { HOSTED, SDK } from '../../src/payment/payment-types';
import paymentRequestDataMock from '../mocks/payment-request-data';
import PaymentSubmitter from '../../src/payment/payment-submitter';

describe('PaymentSubmitter', () => {
    let data;
    let payloadMapper;
    let ppsdkPayloadMapper;
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
            getPpsdkPaymentUrl: jest.fn(() => '/payments'),
        };

        requestSender = {
            postRequest: jest.fn(),
        };

        payloadMapper = {
            mapToPayload: jest.fn(() => transformedData),
            mapToHeaders: jest.fn(() => transformedHeaders),
        };

        ppsdkPayloadMapper = {
            mapToPayload: jest.fn(() => transformedData),
            mapToHeaders: jest.fn(() => transformedHeaders),
        };

        paymentSubmitter = new PaymentSubmitter(urlHelper, requestSender, payloadMapper, ppsdkPayloadMapper);
    });

    it('creates an instance of PaymentSubmitter', () => {
        const config = { host: 'https://bigpay.dev' };
        const instance = PaymentSubmitter.create(config);

        expect(instance instanceof PaymentSubmitter).toBeTruthy();
    });

    describe('submitPayment()', () => {
        it('maps the input data into the correct payload object required for submitting a payment when payment method type is API', () => {
            paymentSubmitter.submitPayment(data, () => {});

            expect(payloadMapper.mapToPayload).toHaveBeenCalled();
        });

        it('maps the input data into the correct payload object required for submitting a payment when payment method type is SDK', () => {
            data = merge({}, paymentRequestDataMock, {
                paymentMethod: {
                    type: SDK,
                },
            });
            paymentSubmitter.submitPayment(data, () => { });

            expect(ppsdkPayloadMapper.mapToPayload).toHaveBeenCalled();
        });

        it('posts the request payload containing payment information to the correct URL when payment method type is API', () => {
            const callback = () => {};
            const url = urlHelper.getPaymentUrl();

            paymentSubmitter.submitPayment(data, callback);

            expect(requestSender.postRequest).toHaveBeenCalledWith(url, transformedData, { headers: transformedHeaders }, callback);
        });

        it('posts the request payload containing payment information to the correct URL when payment method type is SDK', () => {
            data = merge({}, paymentRequestDataMock, {
                paymentMethod: {
                    type: SDK,
                },
            });
            const callback = () => { };
            const url = urlHelper.getPpsdkPaymentUrl();

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
});
