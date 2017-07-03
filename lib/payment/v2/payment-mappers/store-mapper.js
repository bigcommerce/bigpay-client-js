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
            return (0, _utils.omitNil)({
                locale: this.mapToLocale(data),
                store_identity: this.mapToIdentity(data),
                urls: this.mapToUrls(data)
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToLocale',
        value: function mapToLocale(data) {
            var _data$store = data.store,
                store = _data$store === undefined ? {} : _data$store;


            return (0, _utils.omitNil)({
                country_code: store.countryCode,
                currency_code: store.currencyCode,
                language_code: store.storeLanguage
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToIdentity',
        value: function mapToIdentity(data) {
            var _data$store2 = data.store,
                store = _data$store2 === undefined ? {} : _data$store2;


            return (0, _utils.omitNil)({
                id: store.storeId ? (0, _utils.toNumber)(store.storeId) : null,
                name: store.storeName
            });
        }

        /**
         * @private
         * @param {PaymentRequestData} data
         * @returns {Object}
         */

    }, {
        key: 'mapToUrls',
        value: function mapToUrls(data) {
            var _data$store3 = data.store,
                store = _data$store3 === undefined ? {} : _data$store3;


            return (0, _utils.omitNil)({
                cart: store.cartLink,
                checkout: store.checkoutLink,
                confirmation: store.orderConfirmationLink,
                home: store.shopPath
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