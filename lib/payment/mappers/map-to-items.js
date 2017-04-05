'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToItems;

var _utils = require('../../common/utils');

/**
 * Map to items
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToItems(data) {
    var _data$cart = data.cart,
        cart = _data$cart === undefined ? { items: [] } : _data$cart;


    return cart.items.map(function (itemData) {
        return (0, _utils.omitNil)({
            code: itemData.id,
            name: itemData.name,
            price: itemData.integerAmount,
            quantity: itemData.quantity,
            sku: itemData.sku
        });
    });
}
//# sourceMappingURL=map-to-items.js.map