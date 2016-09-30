import { omitEmpty } from '../../common/utils';

/**
 * Map to store
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToStore(data) {
    const { store = {} } = data;

    return omitEmpty({
        store_hash: store.storeHash,
        store_id: store.storeId,
    });
}
