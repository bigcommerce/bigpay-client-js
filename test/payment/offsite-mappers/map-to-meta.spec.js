import mapToMeta from '../../../src/payment/offsite-mappers/map-to-meta';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToMeta', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to meta', () => {
        const output = mapToMeta(data);

        expect(output).toEqual({
            meta_referrer: document.referrer,
            meta_source: data.source,
            meta_user_agent: navigator.userAgent,
        });
    });
});
