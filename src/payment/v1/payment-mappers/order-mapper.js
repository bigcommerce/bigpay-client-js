import { omitNil, toString } from '../../../common/utils';

export default class OrderMapper {
    /**
     * @returns {OrderMapper}
     */
    static create() {
        return new OrderMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToOrder(data) {
        const { order = {} } = data;

        return omitNil({
            billing_address: this.mapToBillingAddress(data),
            coupons: this.mapToCoupons(data),
            currency: order.currency,
            id: order.orderId ? toString(order.orderId) : null,
            items: this.mapToItems(data),
            shipping_address: this.mapToShippingAddress(data),
            token: order.token,
            totals: this.mapToOrderTotals(data),
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToBillingAddress(data) {
        const { customer = {} } = data;
        const address = this.mapToAddress(data, 'billingAddress');

        if (customer.email) {
            address.email = customer.email;
        }

        return address;
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Coupon[]}
     */
    mapToCoupons({ order = {} }) {
        if (order.coupon && order.coupon.coupons) {
            return order.coupon.coupons.map(({ code }) => ({ code }));
        }

        return [];
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToShippingAddress(data) {
        return this.mapToAddress(data, 'shippingAddress');
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @param {string} addressKey
     * @returns {Object}
     */
    mapToAddress(data, addressKey) {
        const address = data[addressKey] || {};

        return omitNil({
            city: address.city,
            company: address.company,
            country_code: address.countryCode,
            country: address.country,
            first_name: address.firstName,
            last_name: address.lastName,
            phone: address.phone,
            state_code: address.provinceCode,
            state: address.province,
            street_1: address.addressLine1,
            street_2: address.addressLine2,
            zip: address.postCode,
        });
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToItems(data) {
        const { cart = { items: [] } } = data;

        return cart.items.map(itemData => omitNil({
            code: itemData.id,
            name: itemData.name,
            price: itemData.integerAmount,
            quantity: itemData.quantity,
            sku: itemData.sku,
        }));
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToOrderTotals(data) {
        const { order = {} } = data;

        return omitNil({
            grand_total: order.grandTotal ? order.grandTotal.integerAmount : null,
            handling: order.handling ? order.handling.integerAmount : null,
            shipping: order.shipping ? order.shipping.integerAmount : null,
            subtotal: order.subtotal ? order.subtotal.integerAmount : null,
            tax: order.taxTotal ? order.taxTotal.integerAmount : null,
        });
    }
}
