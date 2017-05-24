import ClientTokenGenerator from '../../src/payment/client-token-generator';
import paymentRequestDataMock from '../mocks/payment-request-data';

describe('ClientTokenGenerator', () => {
    let clientTokenGenerator;
    let clientTokenMapper;
    let data;
    let requestSender;
    let transformedData;
    let urlHelper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        transformedData = { body: 'hello world' };

        urlHelper = {
            getGenerateClientTokenUrl: jasmine.createSpy('getGenerateClientTokenUrl').and.returnValue('/api/v2/public/payments/client_tokens'),
        };

        requestSender = {
            postRequest: jasmine.createSpy('postRequest'),
        };

        clientTokenMapper = {
            mapToClientToken: jasmine.createSpy('mapToClientToken').and.returnValue(transformedData),
        };

        clientTokenGenerator = new ClientTokenGenerator(urlHelper, requestSender, clientTokenMapper);
    });

    it('creates an instance of ClientTokenGenerator', () => {
        const instance = ClientTokenGenerator.create();

        expect(instance instanceof ClientTokenGenerator).toBeTruthy();
    });

    it('posts a request to generate a client token', () => {
        const callback = () => {};
        const options = {};
        const url = urlHelper.getGenerateClientTokenUrl();

        clientTokenGenerator.generateClientToken(data, callback);

        expect(requestSender.postRequest).toHaveBeenCalledWith(url, transformedData, options, callback);
    });
});
