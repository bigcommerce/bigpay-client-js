import { omitNil, toString } from '../../common/utils';

export default class StoreMapper {
    /**
     * @returns {StoreMapper}
     */
    static create() {
        return new StoreMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToStore(data) {
        const { store = {} } = data;

        return omitNil({
            store_hash: store.storeHash,
            store_id: store.storeId ? toString(store.storeId) : null,
        });
    }
}
