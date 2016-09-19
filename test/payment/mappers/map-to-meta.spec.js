import mapToMeta from '../../../src/payment/mappers/map-to-meta';

describe('mapToMeta', () => {
    let data;

    beforeEach(() => {
        data = {
            orderMeta: {
                geoCountryCode: 'orderMeta.geoCountryCode',
            },
        };
    });

    it('should map to meta', () => {
        const output = mapToMeta(data);

        expect(output).toEqual({
            geo_ip_country_code: 'orderMeta.geoCountryCode',
        });
    });
});
