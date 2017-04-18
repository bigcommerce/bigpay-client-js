import MetaMapper from '../../../src/payment/offsite-payment-mappers/meta-mapper';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('MetaMapper', () => {
    let data;
    let metaMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        metaMapper = new MetaMapper();
    });

    it('creates an instance of MetaMapper', () => {
        const instance = MetaMapper.create();

        expect(instance instanceof MetaMapper).toBeTruthy();
    });

    it('maps the input data into a meta object', () => {
        const output = metaMapper.mapToMeta(data);

        expect(output).toEqual({
            meta_referrer: document.referrer,
            meta_source: data.source,
            meta_user_agent: navigator.userAgent,
        });
    });
});
