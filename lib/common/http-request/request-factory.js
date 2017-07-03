"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestFactory = function () {
    function RequestFactory() {
        _classCallCheck(this, RequestFactory);
    }

    _createClass(RequestFactory, [{
        key: "createRequest",


        /**
         * @param {string} url
         * @param {Object} options
         * @param {Function} [callback]
         * @returns {XMLHttpRequest}
         */
        value: function createRequest(url, options, callback) {
            var xhr = new XMLHttpRequest();

            xhr.onerror = function () {
                if (callback) {
                    callback(new Error(xhr.statusText));
                }
            };

            xhr.onload = function () {
                if (callback) {
                    callback();
                }
            };

            xhr.open(options.method, url, true);
            this.setOptions(xhr, options);

            return xhr;
        }

        /**
         * @private
         * @param {XMLHttpRequest} xhr
         * @param {Object} headers
         * @returns {void}
         */

    }, {
        key: "setHeaders",
        value: function setHeaders(xhr, headers) {
            var headerKeys = Object.keys(headers);

            headerKeys.forEach(function (key) {
                var value = headers[key];

                xhr.setRequestHeader(key, value);
            });
        }

        /**
         * @private
         * @param {XMLHttpRequest} xhr
         * @param {Object} options
         * @returns {void}
         */

    }, {
        key: "setOptions",
        value: function setOptions(xhr, options) {
            xhr.withCredentials = options.withCredentials;

            if (options.headers) {
                this.setHeaders(xhr, options.headers);
            }
        }
    }], [{
        key: "create",

        /**
         * @returns {RequestFactory}
         */
        value: function create() {
            return new RequestFactory();
        }
    }]);

    return RequestFactory;
}();

exports.default = RequestFactory;
//# sourceMappingURL=request-factory.js.map