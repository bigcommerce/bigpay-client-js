import { omitNil } from '../../../common/utils';

export default class CartMapper {
    /**
     * @returns {CartMapper}
     */
    static create() {
        return new CartMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToCart(data) {
        const { cart = {} } = data;

        return omitNil({
            currency_code: cart.currency,
            items: this.mapToItems(data),
            totals: this.mapToOrderTotals(data),
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object[]}
     */
    mapToItems(data) {
        const { cart = { items: [] } } = data;

        return cart.items.map(itemData => omitNil({
            discount_amount: itemData.integerDiscount,
            name: itemData.name,
            price: itemData.integerAmount,
            unit_price: itemData.integerUnitPrice,
            quantity: itemData.quantity,
            sku: itemData.sku,
            tax_amount: itemData.integerTax,
            amount: itemData.integerAmountAfterDiscount,
            type: this.mapToType(itemData),
        }));
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToOrderTotals(data) {
        const { cart = {} } = data;

        return omitNil({
            discount_total: cart.discount ? cart.discount.integerAmount : null,
            grand_total: cart.grandTotal ? cart.grandTotal.integerAmount : null,
            shipping_total: cart.shipping ? cart.shipping.integerAmount : null,
            subtotal: cart.subtotal ? cart.subtotal.integerAmount : null,
            surcharge_total: cart.handling ? cart.handling.integerAmount : null,
            tax_total: cart.taxTotal ? cart.taxTotal.integerAmount : null,
        });
    }

    /**
     * @private
     * @param {Object} itemData
     * @returns {Object}
     */
    mapToType(itemData) {
        const types = {
            ItemPhysicalEntity: 'physical',
            ItemDigitalEntity: 'digital',
            ItemGiftCertificateEntity: 'gift_card',
        };

        return types[itemData.type];
    }
}
