import merge from 'lodash/merge';
import { API, HOSTED } from '../../src/payment/payment-types';
import OffsitePaymentInitializer from '../../src/payment/offsite-payment-initializer';
import paymentRequestDataMock from '../mocks/payment-request-data';

describe('OffsitePaymentInitializer', () => {
    let data;
    let formPoster;
    let offsitePaymentInitializer;
    let payloadMapper;
    let transformedData;
    let urlHelper;

    beforeEach(() => {
        transformedData = { body: 'hello world' };

        data = merge({}, paymentRequestDataMock, {
            paymentMethod: {
                type: HOSTED,
            },
        });

        urlHelper = {
            getOffsitePaymentUrl: jasmine.createSpy('getOffsitePaymentUrl').and.returnValue('/api/pay/initialize'),
        };

        formPoster = {
            postForm: jasmine.createSpy('postForm'),
        };

        payloadMapper = {
            mapToPayload: jasmine.createSpy('mapToPayload').and.returnValue(transformedData),
        };

        offsitePaymentInitializer = new OffsitePaymentInitializer(urlHelper, formPoster, payloadMapper);
    });

    it('creates an instance of OffsitePaymentInitializer', () => {
        const instance = OffsitePaymentInitializer.create();

        expect(instance instanceof OffsitePaymentInitializer).toBeTruthy();
    });

    it('maps the input data into a payload object required for submitting an offsite payment', () => {
        offsitePaymentInitializer.initializeOffsitePayment(data, () => {});

        expect(payloadMapper.mapToPayload).toHaveBeenCalled();
    });

    it('posts the request payload containing payment information to the server using a hidden HTML form', () => {
        const callback = () => {};
        const url = urlHelper.getOffsitePaymentUrl();

        offsitePaymentInitializer.initializeOffsitePayment(data, callback);

        expect(formPoster.postForm).toHaveBeenCalledWith(url, transformedData, callback);
    });

    it('throws an error if the payment method is not a hosted provider', () => {
        data = merge({}, paymentRequestDataMock, {
            paymentMethod: {
                type: API,
            },
        });

        expect(() => offsitePaymentInitializer.initializeOffsitePayment(data)).toThrow();
    });

    it('throws an error if the input data does not contain payment method information', () => {
        expect(() => offsitePaymentInitializer.initializeOffsitePayment({})).toThrow();
    });
});
