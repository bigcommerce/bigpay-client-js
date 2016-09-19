import mapToHeaders from '../../../src/payment/mappers/map-to-headers';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToHeaders', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to billing address', () => {
        const output = mapToHeaders(data);

        expect(output).toEqual({
            HTTP_AUTHORIZATION: data.authToken,
        });
    });
});
