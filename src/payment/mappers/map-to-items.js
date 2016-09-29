/**
 * Map to items
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToItems(data) {
    const { cart = { items: [] } } = data;

    return cart.items.map(itemData => ({
        code: itemData.id,
        name: itemData.name,
        price: itemData.integerAmount,
        quantity: itemData.quantity,
        sku: itemData.sku,
    }));
}
