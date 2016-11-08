import mapToPayload from '../../../src/payment/client-token-mappers/map-to-payload';

describe('mapToPayload', () => {
    let data;

    beforeEach(() => {
        data = {};
    });

    it('should map to payload', () => {
        const output = mapToPayload(data);

        expect(output).toEqual({});
    });
});
