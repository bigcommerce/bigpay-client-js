import mapToMeta from '../../../src/payment/mappers/map-to-meta';

describe('mapToMeta', () => {
    let inputData;

    beforeEach(() => {
        inputData = {
            orderMeta: {
                geoCountryCode: 'orderMeta.geoCountryCode',
            },
        };
    });

    it('should map to meta', () => {
        const data = mapToMeta(inputData);

        expect(data).toEqual({
            geo_ip_country_code: 'orderMeta.geoCountryCode',
        });
    });
});
