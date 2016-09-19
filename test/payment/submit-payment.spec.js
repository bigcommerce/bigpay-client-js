import * as commonValidationModule from '../../src/common/validation';
import * as httpRequestModule from '../../src/common/http-request';
import * as mappersModule from '../../src/payment/mappers';
import * as urlsModule from '../../src/payment/urls';
import * as validatorsModule from '../../src/payment/validators';
import paymentRequestDataMock from '../mocks/payment-request-data';
import submitPayment from '../../src/payment/submit-payment';

describe('submitPayment', () => {
    let data;
    let headers;
    let options;
    let promise;
    let transformedData;
    let validation;

    beforeEach(() => {
        data = paymentRequestDataMock;
        transformedData = { body: 'hello world' };
        headers = { AUTH_TOKEN: '123' };
        options = { host: 'https://bcapp.dev' };
        promise = Promise.resolve({ ok: true });
        validation = {};

        spyOn(httpRequestModule, 'postRequest').and.returnValue(promise);
        spyOn(mappersModule, 'mapToHeaders').and.returnValue(headers);
        spyOn(mappersModule, 'mapToPayload').and.returnValue(transformedData);
        spyOn(commonValidationModule, 'isValid').and.returnValue(true);
        spyOn(urlsModule, 'getPaymentUrl').and.returnValue(`${options.host}/api/public/v1/payments/payment`);
        spyOn(validatorsModule, 'validatePaymentRequest').and.returnValue(validation);
    });

    it('should transform input data', () => {
        const { mapToPayload } = mappersModule;

        submitPayment(data, options);

        expect(mapToPayload).toHaveBeenCalled();
    });

    it('should validate payment data', () => {
        const { validatePaymentRequest } = validatorsModule;

        submitPayment(data, options);

        expect(validatePaymentRequest).toHaveBeenCalled();
    });

    it('should post payment data to server', () => {
        const url = urlsModule.getPaymentUrl();

        submitPayment(data, options);

        expect(httpRequestModule.postRequest).toHaveBeenCalledWith(url, transformedData, { headers });
    });

    it('should not post payment data to server if input data is invalid', () => {
        const { isValid } = commonValidationModule;

        isValid.and.returnValue(false);
        submitPayment(data, options);

        expect(httpRequestModule.postRequest).not.toHaveBeenCalled();
    });
});
