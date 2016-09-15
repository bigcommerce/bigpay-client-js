import mapToItems from './map-to-items';

/**
 * Map to options
 * @param {PaymentInputData} inputData
 * @returns {Object}
 */
export default function mapToOptions(inputData) {
    const { cart = {}, customer = {}, payment = {}, store = {} } = inputData;
    const itemsData = mapToItems(inputData);

    return {
        customer_id: customer.customerId,
        handling: cart.handling ? cart.handling.amount : undefined,
        items: itemsData,
        shipping: cart.shipping ? cart.shipping.amount : undefined,
        store_name: store.storeName,
        subtotal: cart.subTotal ? cart.subTotal.amount : undefined,
        tax: cart.taxTotal ? cart.taxTotal.amount : undefined,
        token: payment.deviceData,
    };
}
