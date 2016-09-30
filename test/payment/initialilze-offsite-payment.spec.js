import * as formRequestModule from '../../src/common/form-request';
import * as urlsModule from '../../src/payment/urls';
import * as offsiteMappersModule from '../../src/payment/offsite-mappers';
import paymentRequestDataMock from '../mocks/payment-request-data';
import initializeOffsitePayment from '../../src/payment/initialize-offsite-payment';

describe('initializeOffsitePayment', () => {
    let data;
    let options;
    let promise;
    let transformedData;

    beforeEach(() => {
        data = paymentRequestDataMock;
        transformedData = { body: 'hello world' };
        options = { host: 'https://bcapp.dev' };
        promise = Promise.resolve({ ok: true });

        spyOn(formRequestModule, 'postForm').and.returnValue(promise);
        spyOn(offsiteMappersModule, 'mapToPayload').and.returnValue(transformedData);
        spyOn(urlsModule, 'getOffsitePaymentUrl').and.returnValue(`${options.host}/api/pay/initialize`);
    });

    it('should transform input data', () => {
        const { mapToPayload } = offsiteMappersModule;

        initializeOffsitePayment(data, options);

        expect(mapToPayload).toHaveBeenCalled();
    });

    it('should post request data to server', () => {
        const url = urlsModule.getOffsitePaymentUrl();

        initializeOffsitePayment(data, options);

        expect(formRequestModule.postForm).toHaveBeenCalledWith(url, transformedData);
    });
});
