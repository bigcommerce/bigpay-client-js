import mapToHeaders from '../../../src/payment/mappers/map-to-headers';

describe('mapToHeaders', () => {
    let inputData;

    beforeEach(() => {
        inputData = {
            authToken: 'authToken',
        };
    });

    it('should map to billing address', () => {
        const data = mapToHeaders(inputData);

        expect(data).toEqual({
            HTTP_AUTHORIZATION: 'authToken',
        });
    });
});
