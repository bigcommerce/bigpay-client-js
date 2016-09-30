/**
 * Map to order totals
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToOrderTotals(data) {
    const { cart } = data;

    return {
        grand_total: cart.grandTotal ? cart.grandTotal.integerAmount : null,
        handling: cart.handling ? cart.handling.integerAmount : null,
        shipping: cart.shipping ? cart.shipping.integerAmount : null,
        subtotal: cart.subTotal ? cart.subTotal.integerAmount : null,
        tax: cart.taxTotal ? cart.taxTotal.integerAmount : null,
    };
}
