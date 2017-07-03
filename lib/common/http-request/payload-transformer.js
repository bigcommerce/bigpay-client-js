'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _contentTypes = require('./content-types');

var _utils = require('../utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PayloadTransformer = function () {
    function PayloadTransformer() {
        _classCallCheck(this, PayloadTransformer);
    }

    _createClass(PayloadTransformer, [{
        key: 'toRequest',


        /**
         * @param {Object} data
         * @param {string} [contentType = APPLICATION_JSON]
         * @returns {Object}
         */
        value: function toRequest(data) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _contentTypes.APPLICATION_JSON;

            if (data && (0, _utils.includes)(contentType, _contentTypes.APPLICATION_JSON)) {
                return JSON.stringify(data);
            }

            return data;
        }

        /**
         * @param {XMLHttpRequest} xhr
         * @returns {Object}
         * @property {Object} data
         * @property {number} status
         * @property {string} statusText
         */

    }, {
        key: 'fromResponse',
        value: function fromResponse(xhr) {
            var contentType = xhr.getResponseHeader('Content-Type');
            var status = xhr.status,
                statusText = xhr.statusText;


            var data = 'response' in xhr ? xhr.response : xhr.responseText;

            if (data && (0, _utils.includes)(contentType, _contentTypes.APPLICATION_JSON)) {
                data = JSON.parse(data);
            }

            return { data: data, status: status, statusText: statusText };
        }
    }], [{
        key: 'create',

        /**
         * @returns {PayloadTransformer}
         */
        value: function create() {
            return new PayloadTransformer();
        }
    }]);

    return PayloadTransformer;
}();

exports.default = PayloadTransformer;
//# sourceMappingURL=payload-transformer.js.map