import paymentRequestDataMock from '../../../mocks/payment-request-data';
import GatewayMapper from '../../../../src/payment/v2/payment-mappers/gateway-mapper';

describe('GatewayMapper', () => {
    let data;
    let gatewayMapper;
    let mappedData;
    let paymentMethodIdMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        mappedData = {
            name: 'id',
        };

        paymentMethodIdMapper = {
            mapToId: jest.fn(() => mappedData.name),
        };

        gatewayMapper = new GatewayMapper(paymentMethodIdMapper);
    });

    it('creates an instance of GatewayMapper', () => {
        const instance = GatewayMapper.create();

        expect(instance instanceof GatewayMapper).toBeTruthy();
    });

    it('maps the input data into a gateway object', () => {
        const output = gatewayMapper.mapToGateway(data);

        expect(output).toEqual({
            name: mappedData.name,
        });
    });

    it('returns an empty object if the input does not contain gateway information', () => {
        paymentMethodIdMapper.mapToId.mockReturnValueOnce(null);

        expect(gatewayMapper.mapToGateway({})).toEqual({});
    });
});
