'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoreMapper = function () {
    function StoreMapper() {
        _classCallCheck(this, StoreMapper);
    }

    _createClass(StoreMapper, [{
        key: 'mapToStore',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToStore(data) {
            var _data$store = data.store,
                store = _data$store === undefined ? {} : _data$store;


            return (0, _utils.omitNil)({
                hash: store.storeHash,
                id: store.storeId ? (0, _utils.toString)(store.storeId) : null,
                name: store.storeName
            });
        }
    }], [{
        key: 'create',

        /**
         * @returns {StoreMapper}
         */
        value: function create() {
            return new StoreMapper();
        }
    }]);

    return StoreMapper;
}();

exports.default = StoreMapper;
//# sourceMappingURL=store-mapper.js.map