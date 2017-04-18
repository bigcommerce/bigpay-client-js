import paymentRequestDataMock from '../../mocks/payment-request-data';
import StoreMapper from '../../../src/payment/offsite-payment-mappers/store-mapper';

describe('StoreMapper', () => {
    let data;
    let storeMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        storeMapper = new StoreMapper();
    });

    it('maps the input object into a store object', () => {
        const output = storeMapper.mapToStore(data);

        expect(output).toEqual({
            store_hash: data.store.storeHash,
            store_id: data.store.storeId,
        });
    });
});
