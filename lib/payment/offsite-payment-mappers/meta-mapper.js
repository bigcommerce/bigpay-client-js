'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../common/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MetaMapper = function () {
    function MetaMapper() {
        _classCallCheck(this, MetaMapper);
    }

    _createClass(MetaMapper, [{
        key: 'mapToMeta',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToMeta(data) {
            var source = data.source;


            return (0, _utils.omitNil)({
                meta_referrer: document.referrer,
                meta_source: source,
                meta_user_agent: navigator.userAgent
            });
        }
    }], [{
        key: 'create',

        /**
         * @returns {MetaMapper}
         */
        value: function create() {
            return new MetaMapper();
        }
    }]);

    return MetaMapper;
}();

exports.default = MetaMapper;
//# sourceMappingURL=meta-mapper.js.map