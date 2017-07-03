'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartMapper = function () {
    function CartMapper() {
        _classCallCheck(this, CartMapper);
    }

    _createClass(CartMapper, [{
        key: 'mapToCart',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToCart(data) {
            var _data$cart = data.cart,
                cart = _data$cart === undefined ? {} : _data$cart;


            return (0, _utils.omitNil)({
                currency_code: cart.currency,
                items: this.mapToItems(data),
                totals: this.mapToOrderTotals(data)
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object[]}
         */

    }, {
        key: 'mapToItems',
        value: function mapToItems(data) {
            var _this = this;

            var _data$cart2 = data.cart,
                cart = _data$cart2 === undefined ? { items: [] } : _data$cart2;


            return cart.items.map(function (itemData) {
                return (0, _utils.omitNil)({
                    discount_amount: itemData.integerDiscount,
                    name: itemData.name,
                    price: itemData.integerAmount,
                    quantity: itemData.quantity,
                    sku: itemData.sku,
                    tax_amount: itemData.integerTax,
                    amount: itemData.integerAmountAfterDiscount,
                    type: _this.mapToType(itemData)
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
            var _data$cart3 = data.cart,
                cart = _data$cart3 === undefined ? {} : _data$cart3;


            return (0, _utils.omitNil)({
                discount_total: cart.discount ? cart.discount.integerAmount : null,
                grand_total: cart.grandTotal ? cart.grandTotal.integerAmount : null,
                shipping_total: cart.shipping ? cart.shipping.integerAmount : null,
                subtotal: cart.subtotal ? cart.subtotal.integerAmount : null,
                surcharge_total: cart.handling ? cart.handling.integerAmount : null,
                tax_total: cart.taxTotal ? cart.taxTotal.integerAmount : null
            });
        }

        /**
         * @private
         * @param {Object} itemData
         * @returns {Object}
         */

    }, {
        key: 'mapToType',
        value: function mapToType(itemData) {
            var types = {
                ItemPhysicalEntity: 'physical',
                ItemDigitalEntity: 'digital',
                ItemGiftCertificateEntity: 'gift_card'
            };

            return types[itemData.type];
        }
    }], [{
        key: 'create',

        /**
         * @returns {CartMapper}
         */
        value: function create() {
            return new CartMapper();
        }
    }]);

    return CartMapper;
}();

exports.default = CartMapper;
//# sourceMappingURL=cart-mapper.js.map