'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlHelper = function () {
    _createClass(UrlHelper, null, [{
        key: 'create',

        /**
         * @param {Object} config
         * @param {string} config.host
         * @returns {CustomerMapper}
         */
        value: function create(config) {
            return new UrlHelper(config);
        }

        /**
         * @param {Object} config
         * @param {string} config.host
         * @returns {void}
         */

    }]);

    function UrlHelper(config) {
        _classCallCheck(this, UrlHelper);

        /**
         * @private
         * @type {Object}
         */
        this.config = config;
    }

    /**
     * @private
     * @returns {string}
     * @throws {Error}
     */


    _createClass(UrlHelper, [{
        key: 'getInstrumentsUrl',


        /**
         * @param {number} storeId
         * @param {number} shopperId
         * @returns {string}
         */
        value: function getInstrumentsUrl(storeId, shopperId) {
            return this.host + '/api/v2/stores/' + storeId + '/shoppers/' + shopperId + '/instruments';
        }

        /**
         * @param {number} storeId
         * @param {number} shopperId
         * @param {number} instrumentId
         * @returns {string}
         */

    }, {
        key: 'getInstrumentByIdUrl',
        value: function getInstrumentByIdUrl(storeId, shopperId, instrumentId) {
            return this.host + '/api/v2/stores/' + storeId + '/shoppers/' + shopperId + '/instruments/' + instrumentId;
        }
    }, {
        key: 'host',
        get: function get() {
            if (!this.config || !this.config.host) {
                throw new Error('Host URL unavailable or not supplied.');
            }

            return this.config.host;
        }
    }]);

    return UrlHelper;
}();

exports.default = UrlHelper;
//# sourceMappingURL=url-helper.js.map