import { omitNil } from '../../common/utils';

/**
 * Map to items
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToItems(data) {
    const { cart = { items: [] } } = data;

    // KLUDGE: amount * 100 - integerAmount is not available yet
    return cart.items.map(itemData => omitNil({
        code: itemData.id,
        name: itemData.name,
        price: itemData.integerAmount || itemData.amount * 100,
        quantity: itemData.quantity,
        sku: itemData.sku,
    }));
}
