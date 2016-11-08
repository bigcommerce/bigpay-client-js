import mapToHeaders from '../../../src/payment/client-token-mappers/map-to-headers';

describe('mapToHeaders', () => {
    let data;

    beforeEach(() => {
        data = {};
    });

    it('should map to headers', () => {
        const output = mapToHeaders(data);

        expect(output).toEqual({});
    });
});
