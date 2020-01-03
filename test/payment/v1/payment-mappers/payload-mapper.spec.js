import PayloadMapper from '../../../../src/payment/v1/payment-mappers/payload-mapper';
import paymentRequestDataMock from '../../../mocks/payment-request-data';

describe('PayloadMapper', () => {
    let customerMapper;
    let data;
    let orderMapper;
    let payloadMapper;
    let paymentMapper;
    let storeMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;

        customerMapper = {
            mapToCustomer: jest.fn(() => 'customer'),
        };

        orderMapper = {
            mapToOrder: jest.fn(() => 'order'),
        };

        paymentMapper = {
            mapToPayment: jest.fn(() => 'payment'),
        };

        storeMapper = {
            mapToStore: jest.fn(() => 'store'),
        };

        payloadMapper = new PayloadMapper(customerMapper, orderMapper, paymentMapper, storeMapper);
    });

    it('creates an instance of PayloadMapper', () => {
        const instance = PayloadMapper.create();

        expect(instance instanceof PayloadMapper).toBeTruthy();
    });

    it('maps the input data into a payload for submitting a payment', () => {
        const output = payloadMapper.mapToPayload(data);

        expect(output).toEqual({
            customer: 'customer',
            notify_url: data.order.callbackUrl,
            order: 'order',
            payment: 'payment',
            store: 'store',
        });
    });

    it('maps the input data into an object containing http headers required for submitting a payment', () => {
        const output = payloadMapper.mapToHeaders(data);

        expect(output).toEqual({
            Authorization: data.authToken,
        });
    });

    it('returns an empty object if the input does not contain the required information', () => {
        customerMapper.mapToCustomer.mockReturnValueOnce({});
        orderMapper.mapToOrder.mockReturnValueOnce({});
        paymentMapper.mapToPayment.mockReturnValueOnce({});
        storeMapper.mapToStore.mockReturnValueOnce({});

        expect(payloadMapper.mapToPayload({})).toEqual({
            customer: {},
            order: {},
            payment: {},
            store: {},
        });
    });
});
