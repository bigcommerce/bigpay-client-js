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
            getGenerateClientTokenUrl: jest.fn(() => '/api/v2/public/payments/client_tokens'),
        };

        requestSender = {
            postRequest: jest.fn(),
        };

        clientTokenMapper = {
            mapToClientToken: jest.fn(() => transformedData),
        };

        clientTokenGenerator = new ClientTokenGenerator(urlHelper, requestSender, clientTokenMapper);
    });

    it('creates an instance of ClientTokenGenerator', () => {
        const config = { host: 'https://bigpay.dev' };
        const instance = ClientTokenGenerator.create(config);

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
