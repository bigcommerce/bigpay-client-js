import { omitNil } from '../../common/utils';

/**
 * Map to order totals
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToOrderTotals(data) {
    const { cart } = data;

    // KLUDGE: amount * 100 - integerAmount is not available yet
    return omitNil({
        grand_total: cart.grandTotal ? cart.grandTotal.integerAmount : null,
        handling: cart.handling ? cart.handling.integerAmount || cart.handling.amount * 100 : null,
        shipping: cart.shipping ? cart.shipping.integerAmount || cart.shipping.amount * 100 : null,
        subtotal: cart.subTotal ? cart.subTotal.integerAmount || cart.subTotal.amount * 100 : null,
        tax: cart.taxTotal ? cart.taxTotal.integerAmount || cart.taxTotal.amount * 100 : null,
    });
}
