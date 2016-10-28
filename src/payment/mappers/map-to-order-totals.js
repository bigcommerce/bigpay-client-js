import { omitNil } from '../../common/utils';

/**
 * Map to order totals
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToOrderTotals(data) {
    const { order } = data;

    return omitNil({
        grand_total: order.grandTotal ? order.grandTotal.integerAmount : null,
        handling: order.handling ? order.handling.integerAmount : null,
        shipping: order.shipping ? order.shipping.integerAmount : null,
        subtotal: order.subtotal ? order.subtotal.integerAmount : null,
        tax: order.taxTotal ? order.taxTotal.integerAmount : null,
    });
}
