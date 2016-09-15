import submitPayment from '../../src/payment/submit-payment';
import * as httpRequestModule from '../../src/common/http-request';
import * as mappersModule from '../../src/payment/mappers';
import * as urlsModule from '../../src/payment/urls';

describe('submitPayment', () => {
    let data;
    let headers;
    let options;
    let promise;
    let transformedData;
    let validation;

    beforeEach(() => {
        data = { body: 'hello' };
        transformedData = { body: 'world' };
        headers = { AUTH_TOKEN: '123' };
        options = { host: 'https://bcapp.dev' };
        promise = Promise.resolve({ ok: true });
        validation = {};

        spyOn(httpRequestModule, 'postRequest').and.returnValue(promise);
        spyOn(mappersModule, 'mapToHeaders').and.returnValue(headers);
        spyOn(mappersModule, 'mapToPayment').and.returnValue(transformedData);
        spyOn(urlsModule, 'getPaymentUrl').and.returnValue(`${options.host}/api/public/v1/payments/payment`);
    });

    it('should transform input data', () => {
        const { mapToPayment } = mappersModule;

        submitPayment(data, options);

        expect(mapToPayment).toHaveBeenCalled();
    });

    it('should post payment data to server', () => {
        const url = urlsModule.getPaymentUrl();

        submitPayment(data, options);

        expect(httpRequestModule.postRequest).toHaveBeenCalledWith(url, transformedData, { headers });
    });
});
