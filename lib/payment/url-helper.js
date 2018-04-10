"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlHelper = function () {
  _createClass(UrlHelper, null, [{
    key: "create",

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
   */


  _createClass(UrlHelper, [{
    key: "getOffsitePaymentUrl",


    /**
     * @returns {string}
     */
    value: function getOffsitePaymentUrl() {
      return this.host + "/pay/initialize";
    }

    /**
     * @returns {string}
     */

  }, {
    key: "getPaymentUrl",
    value: function getPaymentUrl() {
      return this.host + "/api/public/v1/orders/payments";
    }

    /**
     * @returns {string}
     */

  }, {
    key: "getGenerateClientTokenUrl",
    value: function getGenerateClientTokenUrl() {
      return this.host + "/api/v2/public/payments/client_tokens";
    }
  }, {
    key: "host",
    get: function get() {
      return this.config.host;
    }
  }]);

  return UrlHelper;
}();

exports.default = UrlHelper;
//# sourceMappingURL=url-helper.js.map