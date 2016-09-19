import mapToHeaders from '../../../src/payment/mappers/map-to-headers';

describe('mapToHeaders', () => {
    let data;

    beforeEach(() => {
        data = {
            authToken: 'authToken',
        };
    });

    it('should map to billing address', () => {
        const output = mapToHeaders(data);

        expect(output).toEqual({
            HTTP_AUTHORIZATION: 'authToken',
        });
    });
});
