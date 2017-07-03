'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../../common/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderMapper = function () {
    function HeaderMapper() {
        _classCallCheck(this, HeaderMapper);
    }

    _createClass(HeaderMapper, [{
        key: 'mapToHeaders',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToHeaders(data) {
            var authToken = data.authToken;


            return (0, _utils.omitNil)({
                Authorization: authToken
            });
        }
    }], [{
        key: 'create',

        /**
         * @returns {HeaderMapper}
         */
        value: function create() {
            return new HeaderMapper();
        }
    }]);

    return HeaderMapper;
}();

exports.default = HeaderMapper;
//# sourceMappingURL=header-mapper.js.map