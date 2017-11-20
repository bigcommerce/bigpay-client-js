'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapToInstrumentPayload = mapToInstrumentPayload;
exports.mapToHeaders = mapToHeaders;

var _utils = require('../../../common/utils');

/**
 * @param {Object} [data={}]
 * @param {Object} data.billingAddress
 * @param {CreditCard} data.creditCard
 * @param {boolean} data.defaultInstrument
 * @param {string} data.providerName
 * @return {Object}
 */
function mapToInstrumentPayload() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var providerName = data.providerName,
        default_instrument = data.defaultInstrument;


    var provider = (0, _utils.omitNil)({ name: providerName });

    return (0, _utils.omitNil)({
        provider: provider,
        credit_card: mapToCreditCard(data),
        billing_address: mapToAddress(data),
        default_instrument: default_instrument
    });
}

/**
 * @param {Object} data
 * @param {string} data.authToken
 * @return {Object}
 */
function mapToHeaders() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        Authorization = _ref.authToken;

    return (0, _utils.omitNil)({
        Authorization: Authorization
    });
}

/**
 * @param {AddressData} data
 * @return {Object}
 */
function mapToAddress(_ref2) {
    var _ref2$billingAddress = _ref2.billingAddress,
        billingAddress = _ref2$billingAddress === undefined ? {} : _ref2$billingAddress;

    var state = mapToState(billingAddress.provinceCode, billingAddress.province);

    return (0, _utils.omitNil)({
        address_line_1: billingAddress.addressLine1,
        address_line_2: billingAddress.addressLine2,
        city: billingAddress.city,
        company: billingAddress.company,
        country_code: billingAddress.countryCode,
        email: billingAddress.email,
        first_name: billingAddress.firstName,
        last_name: billingAddress.lastName,
        phone: billingAddress.phone,
        postal_code: billingAddress.postCode,
        state: state
    });
}

/**
 * @param {string} code
 * @param {string} name
 * @return {Object}
 */
function mapToState(code, name) {
    return (0, _utils.omitNil)({
        code: code,
        name: name
    });
}

/**
 * @param {Object} data
 * @param {CreditCard} data.creditCard
 * @return {Object}
 */
function mapToCreditCard(_ref3) {
    var _ref3$creditCard = _ref3.creditCard,
        creditCard = _ref3$creditCard === undefined ? {} : _ref3$creditCard;

    var threeDSecure = (0, _utils.omitNil)(creditCard.threeDSecure);

    return (0, _utils.omitNil)({
        cardholder_name: creditCard.cardholderName,
        number: creditCard.number,
        month: creditCard.month,
        year: creditCard.year,
        verification_code: creditCard.verificationCode,
        issue_month: creditCard.issueMonth,
        issue_year: creditCard.issueYear,
        issue_number: creditCard.issueNumber,
        track_data: creditCard.trackData,
        is_manual_entry: creditCard.isManualEntry,
        icc_data: creditCard.iccData,
        fallback_reason: creditCard.fallbackReason,
        is_contactless: creditCard.isContactless,
        encrypted_pin_cryptogram: creditCard.encryptedPinCryptogram,
        encrypted_pin_ksn: creditCard.encryptedPinKsn,
        three_d_secure: threeDSecure
    });
}
//# sourceMappingURL=index.js.map