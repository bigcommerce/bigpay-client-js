import { omitNil } from '../../common/utils';

/**
 * Map to store
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToStore(data) {
    const { store = {} } = data;

    return omitNil({
        store_hash: store.storeHash,
        store_id: store.storeId,
    });
}
