'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _deepAssign = require('deep-assign');

var _deepAssign2 = _interopRequireDefault(_deepAssign);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _methodTypes = require('./method-types');

var _defaultOptions = require('./default-options');

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _payloadTransformer = require('./payload-transformer');

var _payloadTransformer2 = _interopRequireDefault(_payloadTransformer);

var _requestFactory = require('./request-factory');

var _requestFactory2 = _interopRequireDefault(_requestFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestSender = function () {
    _createClass(RequestSender, null, [{
        key: 'create',

        /**
         * @returns {RequestSender}
         */
        value: function create() {
            var requestFactory = _requestFactory2.default.create();
            var payloadTransformer = _payloadTransformer2.default.create();

            return new RequestSender(requestFactory, payloadTransformer);
        }

        /**
         * @param {RequestFactory} requestFactory
         * @param {PayloadTransformer} payloadTransformer
         */

    }]);

    function RequestSender(requestFactory, payloadTransformer) {
        _classCallCheck(this, RequestSender);

        /**
         * @private
         * @type {RequestFactory}
         */
        this.requestFactory = requestFactory;

        /**
         * @private
         * @type {PayloadTransformer}
         */
        this.payloadTransformer = payloadTransformer;
    }

    /**
     * @param {string} url
     * @param {Object} data
     * @param {Object} [options]
     * @param {Function} [callback]
     * @returns {void}
     */


    _createClass(RequestSender, [{
        key: 'sendRequest',
        value: function sendRequest(url, data, options, callback) {
            var _this = this;

            var mergedOptions = (0, _deepAssign2.default)({}, _defaultOptions2.default, options);

            var xhr = this.requestFactory.createRequest(url, mergedOptions, function (error) {
                var response = _this.payloadTransformer.fromResponse(xhr);

                if (!callback) {
                    return;
                }

                if (error || !_this.isSuccessfulRequest(xhr)) {
                    callback(response);
                    return;
                }

                callback(null, response);
            });

            var payload = this.payloadTransformer.toRequest(data, mergedOptions.headers['Content-Type']);

            xhr.send(payload);
        }

        /**
         * @param {string} url
         * @param {Object} data
         * @param {Object} [options]
         * @param {Function} [callback]
         * @returns {void}
         */

    }, {
        key: 'postRequest',
        value: function postRequest(url, data, options, callback) {
            var mergedOptions = (0, _objectAssign2.default)({}, options, {
                method: _methodTypes.POST
            });

            this.sendRequest(url, data, mergedOptions, callback);
        }

        /**
         * @private
         * @param {XMLHttpRequest} xhr
         * @returns {boolean}
         */

    }, {
        key: 'isSuccessfulRequest',
        value: function isSuccessfulRequest(xhr) {
            return xhr.status >= 200 && xhr.status < 300;
        }
    }]);

    return RequestSender;
}();

exports.default = RequestSender;
//# sourceMappingURL=request-sender.js.map