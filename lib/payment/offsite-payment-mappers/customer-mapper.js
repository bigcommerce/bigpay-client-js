'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('../../common/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomerMapper = function () {
    function CustomerMapper() {
        _classCallCheck(this, CustomerMapper);
    }

    _createClass(CustomerMapper, [{
        key: 'mapToCustomer',


        /**
         * @param {PaymentRequestData} data
         * @returns {Object}
         */
        value: function mapToCustomer(data) {
            var _data$customer = data.customer,
                customer = _data$customer === undefined ? {} : _data$customer,
                _data$quoteMeta = data.quoteMeta,
                quoteMeta = _data$quoteMeta === undefined ? {} : _data$quoteMeta,
                _data$store = data.store,
                store = _data$store === undefined ? {} : _data$store;


            return (0, _utils.omitNil)({
                customer_browser_info: navigator.userAgent,
                customer_email: customer.email,
                customer_first_name: customer.firstName,
                customer_geo_ip_country_code: quoteMeta.request ? quoteMeta.request.geoCountryCode : null,
                customer_last_name: customer.lastName,
                customer_locale: store.storeLanguage,
                customer_name: customer.name,
                customer_phone: customer.phoneNumber,
                customer_reference: customer.email
            });
        }
    }], [{
        key: 'create',

        /**
         * @returns {CustomerMapper}
         */
        value: function create() {
            return new CustomerMapper();
        }
    }]);

    return CustomerMapper;
}();

exports.default = CustomerMapper;
//# sourceMappingURL=customer-mapper.js.map