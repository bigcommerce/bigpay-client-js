import mapToHeaders from '../../../src/payment/mappers/map-to-headers';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToHeaders', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to headers', () => {
        const output = mapToHeaders(data);

        expect(output).toEqual({
            Authorization: data.authToken,
        });
    });
});
