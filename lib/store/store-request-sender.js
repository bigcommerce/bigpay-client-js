'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestSender = require('../common/http-request/request-sender');

var _requestSender2 = _interopRequireDefault(_requestSender);

var _methodTypes = require('../common/http-request/method-types');

var _urlHelper = require('./url-helper');

var _urlHelper2 = _interopRequireDefault(_urlHelper);

var _mappers = require('./v2/mappers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoreRequestSender = function () {
    _createClass(StoreRequestSender, null, [{
        key: 'create',

        /**
         * @param {Object} config
         * @returns {StoreRequestSender}
         */
        value: function create(config) {
            var urlHelper = _urlHelper2.default.create(config);
            var requestSender = _requestSender2.default.create();

            return new StoreRequestSender(urlHelper, requestSender);
        }

        /**
         * @param {UrlHelper} urlHelper
         * @param {RequestSender} requestSender
         * @returns {void}
         */

    }]);

    function StoreRequestSender(urlHelper, requestSender) {
        _classCallCheck(this, StoreRequestSender);

        /**
         * @private
         * @type {UrlHelper}
         */
        this.urlHelper = urlHelper;

        /**
         * @private
         * @type {RequestSender}
         */
        this.requestSender = requestSender;
    }

    /**
     * @param {Object} data
     * @param {Function} [callback]
     * @return {void}
     */


    _createClass(StoreRequestSender, [{
        key: 'getShopperToken',
        value: function getShopperToken(data, callback) {
            var url = this.urlHelper.getTokenUrl(data.storeId, data.shopperId);
            var options = {
                headers: (0, _mappers.mapToHeaders)(data)
            };

            this.requestSender.postRequest(url, null, options, callback);
        }

        /**
         * @param {Object} data
         * @param {Function} [callback]
         * @return {void}
         */

    }, {
        key: 'getShopperInstruments',
        value: function getShopperInstruments(data, callback) {
            var url = this.urlHelper.getInstrumentsUrl(data.storeId, data.shopperId);
            var options = {
                headers: (0, _mappers.mapToHeaders)(data)
            };

            this.requestSender.sendRequest(url, null, options, callback);
        }

        /**
         * @param {Object} data
         * @param {Function} [callback]
         * @return {void}
         */

    }, {
        key: 'postShopperInstrument',
        value: function postShopperInstrument(data, callback) {
            var url = this.urlHelper.getInstrumentsUrl(data.storeId, data.shopperId);
            var payload = (0, _mappers.mapToInstrumentPayload)(data);
            var options = {
                headers: (0, _mappers.mapToHeaders)(data)
            };

            this.requestSender.postRequest(url, payload, options, callback);
        }

        /**
         * @param {Object} data
         * @param {Function} [callback]
         * @return {void}
         */

    }, {
        key: 'deleteShopperInstrument',
        value: function deleteShopperInstrument(data, callback) {
            var url = this.urlHelper.getInstrumentByIdUrl(data.storeId, data.shopperId, data.instrumentId);
            var options = {
                method: _methodTypes.DELETE,
                headers: (0, _mappers.mapToHeaders)(data)
            };

            this.requestSender.sendRequest(url, null, options, callback);
        }
    }]);

    return StoreRequestSender;
}();

exports.default = StoreRequestSender;
//# sourceMappingURL=store-request-sender.js.map