import * as mappersModule from '../../src/payment/mappers';
import * as urlsModule from '../../src/payment/urls';
import paymentRequestDataMock from '../mocks/payment-request-data';
import RequestSender from '../../src/common/http-request/request-sender';
import submitPayment from '../../src/payment/submit-payment';

describe('submitPayment', () => {
    let callback;
    let data;
    let headers;
    let options;
    let requestSender;
    let transformedData;

    beforeEach(() => {
        callback = () => {};
        data = paymentRequestDataMock;
        transformedData = { body: 'hello world' };
        headers = { AUTH_TOKEN: '123' };
        options = { host: 'https://bcapp.dev' };
        requestSender = jasmine.createSpyObj('requestSender', ['postRequest']);

        spyOn(RequestSender, 'create').and.returnValue(requestSender);
        spyOn(mappersModule, 'mapToHeaders').and.returnValue(headers);
        spyOn(mappersModule, 'mapToPayload').and.returnValue(transformedData);
        spyOn(urlsModule, 'getPaymentUrl').and.returnValue(`${options.host}/api/public/v1/payments/payment`);
    });

    it('should transform input data', () => {
        const { mapToPayload } = mappersModule;

        submitPayment(data, options, callback);

        expect(mapToPayload).toHaveBeenCalled();
    });

    it('should post payment data to server', () => {
        const url = urlsModule.getPaymentUrl();

        submitPayment(data, options, callback);

        expect(requestSender.postRequest).toHaveBeenCalledWith(url, transformedData, { headers }, callback);
    });
});
