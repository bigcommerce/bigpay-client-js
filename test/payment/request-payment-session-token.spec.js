import * as httpRequestModule from '../../src/common/http-request';
import * as mappersModule from '../../src/payment/session-token-mappers';
import * as urlsModule from '../../src/payment/urls';
import paymentRequestDataMock from '../mocks/payment-request-data';
import requestPaymentSessionToken from '../../src/payment/request-payment-session-token';

describe('requestPaymentSessionToken', () => {
    let callback;
    let data;
    let headers;
    let options;
    let transformedData;

    beforeEach(() => {
        callback = () => {};
        data = paymentRequestDataMock;
        transformedData = { body: 'hello world' };
        headers = { AUTH_TOKEN: '123' };
        options = { host: 'https://bcapp.dev' };

        spyOn(httpRequestModule, 'postRequest');
        spyOn(mappersModule, 'mapToHeaders').and.returnValue(headers);
        spyOn(mappersModule, 'mapToPayload').and.returnValue(transformedData);
        spyOn(urlsModule, 'getPaymentSessionTokenUrl').and.returnValue(`${options.host}/api/public/v1/payments/session_tokens`);
    });

    it('should transform input data', () => {
        const { mapToPayload } = mappersModule;

        requestPaymentSessionToken(data, options, callback);

        expect(mapToPayload).toHaveBeenCalled();
    });

    it('should post payment data to server', () => {
        const url = urlsModule.getPaymentSessionTokenUrl();

        requestPaymentSessionToken(data, options, callback);

        expect(httpRequestModule.postRequest).toHaveBeenCalledWith(url, transformedData, { headers }, callback);
    });
});
