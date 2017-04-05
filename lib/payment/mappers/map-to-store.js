'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToStore;

var _utils = require('../../common/utils');

/**
 * Map to store
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToStore(data) {
    var _data$store = data.store,
        store = _data$store === undefined ? {} : _data$store;


    return (0, _utils.omitNil)({
        hash: store.storeHash,
        id: '' + store.storeId,
        name: store.storeName
    });
}
//# sourceMappingURL=map-to-store.js.map