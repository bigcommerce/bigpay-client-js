/**
 * Map to order totals
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToOrderTotals(data) {
    const { cart } = data;

    return {
        grand_total: cart.grandTotal ? cart.grandTotal.integerAmount : undefined,
        handling: cart.handling ? cart.handling.amount : undefined,
        shipping: cart.shipping ? cart.shipping.amount : undefined,
        subtotal: cart.subTotal ? cart.subTotal.amount : undefined,
        tax: cart.taxTotal ? cart.taxTotal.amount : undefined,
    };
}
