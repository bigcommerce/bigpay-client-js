import omit from 'lodash/omit';
import paymentRequestDataMock from '../../mocks/payment-request-data';
import StoreMapper from '../../../src/payment/offsite-payment-mappers/store-mapper';

describe('StoreMapper', () => {
    let data;
    let storeMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;
        storeMapper = new StoreMapper();
    });

    it('creates an instance of StoreMapper', () => {
        const instance = StoreMapper.create();

        expect(instance instanceof StoreMapper).toBeTruthy();
    });

    it('maps the input object into a store object', () => {
        const output = storeMapper.mapToStore(data);

        expect(output).toEqual({
            store_hash: data.store.storeHash,
            store_id: data.store.storeId,
            store_name: data.store.storeName,
        });
    });

    it('returns an empty object if the input does not contain store information', () => {
        const output = storeMapper.mapToStore(omit(data, 'store'));

        expect(output).toEqual({});
    });
});
