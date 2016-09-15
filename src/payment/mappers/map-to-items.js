/**
 * Map to items
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToItems(inputData) {
    const { cart = { items: [] } } = inputData;

    return cart.items.map(itemData => ({
        code: itemData.id,
        name: itemData.name,
        quantity: itemData.quantity,
        sku: itemData.sku,
        value: itemData.amount,
    }));
}
