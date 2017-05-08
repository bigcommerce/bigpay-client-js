import paymentRequestDataMock from '../../../mocks/payment-request-data';
import ClientTokenMapper from '../../../../src/payment/v2/payment-mappers/client-token-mapper';

describe('ClientTokenMapper', () => {
    let cartMapper;
    let clientTokenMapper;
    let data;
    let gatewayMapper;
    let mappedData;
    let quoteMapper;
    let storeMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        mappedData = {
            cart: { currency_code: 'AUD' },
            gateway: { name: 'paypalprous' },
            quote: { billing_address: {}, shipping_address: {} },
            store: { locale: {} },
        };

        cartMapper = {
            mapToCart: jasmine.createSpy('mapToCart').and.returnValue(mappedData.cart),
        };

        gatewayMapper = {
            mapToGateway: jasmine.createSpy('mapToGateway').and.returnValue(mappedData.gateway),
        };

        quoteMapper = {
            mapToQuote: jasmine.createSpy('mapToQuote').and.returnValue(mappedData.quote),
        };

        storeMapper = {
            mapToStore: jasmine.createSpy('mapToStore').and.returnValue(mappedData.store),
        };

        clientTokenMapper = new ClientTokenMapper(cartMapper, gatewayMapper, quoteMapper, storeMapper);
    });

    it('creates an instance of ClientTokenMapper', () => {
        const instance = ClientTokenMapper.create();

        expect(instance instanceof ClientTokenMapper).toBeTruthy();
    });

    it('maps the input data into a payload for generating a client token', () => {
        const output = clientTokenMapper.mapToClientToken(data);

        expect(output).toEqual({
            cart: mappedData.cart,
            gateway: mappedData.gateway,
            quote: mappedData.quote,
            store: mappedData.store,
        });
    });

    it('returns an empty object if the input does not contain the required information', () => {
        cartMapper.mapToCart.and.returnValue({});
        gatewayMapper.mapToGateway.and.returnValue({});
        quoteMapper.mapToQuote.and.returnValue({});
        storeMapper.mapToStore.and.returnValue({});

        expect(clientTokenMapper.mapToClientToken({})).toEqual({
            cart: {},
            gateway: {},
            quote: {},
            store: {},
        });
    });
});
