import * as httpRequestModule from '../../src/common/http-request';
import * as mappersModule from '../../src/payment/client-token-mappers';
import * as urlsModule from '../../src/payment/urls';
import paymentRequestDataMock from '../mocks/payment-request-data';
import requestClientToken from '../../src/payment/request-client-token';

describe('requestClientToken', () => {
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
        spyOn(urlsModule, 'getClientTokenUrl').and.returnValue(`${options.host}/api/public/v1/payments/client_tokens`);
    });

    it('should transform input data', () => {
        const { mapToPayload } = mappersModule;

        requestClientToken(data, options, callback);

        expect(mapToPayload).toHaveBeenCalled();
    });

    it('should request session token from server', () => {
        const url = urlsModule.getClientTokenUrl();

        requestClientToken(data, options, callback);

        expect(httpRequestModule.postRequest).toHaveBeenCalledWith(url, transformedData, { headers }, callback);
    });
});
