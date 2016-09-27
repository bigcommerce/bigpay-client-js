import mapToStore from '../../../src/payment/offsite-mappers/map-to-store';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToStore', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to store', () => {
        const output = mapToStore(data);

        expect(output).toEqual({
            store_hash: data.store.storeHash,
            store_id: data.store.storeId,
        });
    });
});
