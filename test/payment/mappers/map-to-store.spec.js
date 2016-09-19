import mapToStore from '../../../src/payment/mappers/map-to-store';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToStore', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to store', () => {
        const output = mapToStore(data);

        expect(output).toEqual({
            hash: data.store.storeHash,
            id: data.store.storeId,
            name: data.store.storeName,
        });
    });
});
