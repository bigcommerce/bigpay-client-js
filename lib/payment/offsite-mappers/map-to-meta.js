'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mapToMeta;

var _utils = require('../../common/utils');

/**
 * Map to meta
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
function mapToMeta(data) {
    var source = data.source;


    return (0, _utils.omitNil)({
        meta_referrer: document.referrer,
        meta_source: source,
        meta_user_agent: navigator.userAgent
    });
}
//# sourceMappingURL=map-to-meta.js.map