import paymentRequestDataMock from '../../../mocks/payment-request-data';
import StoreMapper from '../../../../src/payment/v1/payment-mappers/store-mapper';

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
            hash: data.store.storeHash,
            id: data.store.storeId,
            name: data.store.storeName,
        });
    });

    it('returns an empty object if the input does not contain store information', () => {
        const output = storeMapper.mapToStore({});

        expect(output).toEqual({});
    });
});
