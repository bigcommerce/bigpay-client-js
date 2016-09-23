import * as commonValidationModule from '../../src/common/validation';
import * as formRequestModule from '../../src/common/form-request';
import * as urlsModule from '../../src/payment/urls';
import * as offsiteMappersModule from '../../src/payment/offsite-mappers';
import * as offsiteValidatorsModule from '../../src/payment/offsite-validators';
import paymentRequestDataMock from '../mocks/payment-request-data';
import initializeOffsitePayment from '../../src/payment/initialize-offsite-payment';

describe('initializeOffsitePayment', () => {
    let data;
    let options;
    let promise;
    let transformedData;
    let validation;

    beforeEach(() => {
        data = paymentRequestDataMock;
        transformedData = { body: 'hello world' };
        options = { host: 'https://bcapp.dev' };
        promise = Promise.resolve({ ok: true });
        validation = {};

        spyOn(formRequestModule, 'postForm').and.returnValue(promise);
        spyOn(commonValidationModule, 'isValid').and.returnValue(true);
        spyOn(offsiteMappersModule, 'mapToPayload').and.returnValue(transformedData);
        spyOn(offsiteValidatorsModule, 'validatePaymentRequest').and.returnValue(validation);
        spyOn(urlsModule, 'getOffsitePaymentUrl').and.returnValue(`${options.host}/api/pay/initialize`);
    });

    it('should transform input data', () => {
        const { mapToPayload } = offsiteMappersModule;

        initializeOffsitePayment(data, options);

        expect(mapToPayload).toHaveBeenCalled();
    });

    it('should validate input data', () => {
        const { validatePaymentRequest } = offsiteValidatorsModule;

        initializeOffsitePayment(data, options);

        expect(validatePaymentRequest).toHaveBeenCalled();
    });

    it('should post request data to server', () => {
        const url = urlsModule.getOffsitePaymentUrl();

        initializeOffsitePayment(data, options);

        expect(formRequestModule.postForm).toHaveBeenCalledWith(url, transformedData);
    });

    it('should not post request data to server if input data is invalid', () => {
        const { isValid } = commonValidationModule;

        isValid.and.returnValue(false);
        initializeOffsitePayment(data, options);

        expect(formRequestModule.postForm).not.toHaveBeenCalled();
    });
});
