import { omitNil } from '../../common/utils';

/**
 * Map to store
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToStore(data) {
    const { store = {} } = data;

    return omitNil({
        hash: store.storeHash,
        id: `${store.storeId}`,
        name: store.storeName,
    });
}
