'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderMapper = function () {
    function OrderMapper() {
        _classCallCheck(this, OrderMapper);
    }

    _createClass(OrderMapper, [{
        key: 'mapToOrder',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToOrder(data) {
            var _data$order = data.order,
                order = _data$order === undefined ? {} : _data$order;


            return (0, _utils.omitNil)({
                billing_address: this.mapToBillingAddress(data),
                coupons: this.mapToCoupons(data),
                currency: order.currency,
                id: order.orderId ? (0, _utils.toString)(order.orderId) : null,
                items: this.mapToItems(data),
                shipping: this.mapToShipping(data),
                shipping_address: this.mapToShippingAddress(data),
                token: order.token,
                totals: this.mapToOrderTotals(data)
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToBillingAddress',
        value: function mapToBillingAddress(data) {
            var _data$customer = data.customer,
                customer = _data$customer === undefined ? {} : _data$customer;

            var address = this.mapToAddress(data, 'billingAddress');

            if (customer.email) {
                address.email = customer.email;
            }

            return address;
        }

        /**
         * @private
         * @param  {PaymentRequestData} data
         * @return {Shipping[]}
         */

    }, {
        key: 'mapToShipping',
        value: function mapToShipping(data) {
            var _ref = data.shippingOption || {},
                description = _ref.description;

            if (description) {
                return [{
                    method: description
                }];
            }

            return [];
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Coupon[]}
         */

    }, {
        key: 'mapToCoupons',
        value: function mapToCoupons(_ref2) {
            var _ref2$order = _ref2.order,
                order = _ref2$order === undefined ? {} : _ref2$order;

            if (order.coupon && order.coupon.coupons) {
                return order.coupon.coupons.map(function (_ref3) {
                    var code = _ref3.code;
                    return { code: code };
                });
            }

            return [];
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToShippingAddress',
        value: function mapToShippingAddress(data) {
            return this.mapToAddress(data, 'shippingAddress');
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @param {string} addressKey
         * @returns {Object}
         */

    }, {
        key: 'mapToAddress',
        value: function mapToAddress(data, addressKey) {
            var address = data[addressKey] || {};

            return (0, _utils.omitEmptyStringAndNil)({
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
                zip: address.postCode
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToItems',
        value: function mapToItems(data) {
            var _data$cart = data.cart,
                cart = _data$cart === undefined ? { items: [] } : _data$cart;


            return cart.items.map(function (itemData) {
                return (0, _utils.omitNil)({
                    code: itemData.id,
                    variant_id: itemData.variantId,
                    name: itemData.name,
                    price: itemData.integerAmount,
                    quantity: itemData.quantity,
                    sku: itemData.sku
                });
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToOrderTotals',
        value: function mapToOrderTotals(data) {
            var _data$order2 = data.order,
                order = _data$order2 === undefined ? {} : _data$order2;


            return (0, _utils.omitNil)({
                grand_total: order.grandTotal ? order.grandTotal.integerAmount : null,
                handling: order.handling ? order.handling.integerAmount : null,
                shipping: order.shipping ? order.shipping.integerAmount : null,
                subtotal: order.subtotal ? order.subtotal.integerAmount : null,
                tax: order.taxTotal ? order.taxTotal.integerAmount : null
            });
        }
    }], [{
        key: 'create',

        /**
         * @returns {OrderMapper}
         */
        value: function create() {
            return new OrderMapper();
        }
    }]);

    return OrderMapper;
}();

exports.default = OrderMapper;
//# sourceMappingURL=order-mapper.js.map