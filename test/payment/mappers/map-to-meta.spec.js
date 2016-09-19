import mapToMeta from '../../../src/payment/mappers/map-to-meta';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToMeta', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to meta', () => {
        const output = mapToMeta(data);

        expect(output).toEqual({
            geo_ip_country_code: data.orderMeta.geoCountryCode,
        });
    });
});
