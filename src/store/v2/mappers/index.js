import { omitNil } from '../../../common/utils';

/**
 * @param {Object} [data={}]
 * @param {Object} data.billingAddress
 * @param {CreditCard} data.creditCard
 * @param {boolean} data.defaultInstrument
 * @param {string} data.providerName
 * @return {Object}
 */
export function mapToInstrumentPayload(data = {}) {
    const {
        providerName,
        defaultInstrument: default_instrument,
    } = data;

    const provider = omitNil({ name: providerName });

    return omitNil({
        provider,
        credit_card: mapToCreditCard(data),
        billing_address: mapToAddress(data),
        default_instrument,
    });
}

/**
 * @param {Object} data
 * @param {string} data.authToken
 * @return {Object}
 */
export function mapToHeaders({ authToken: Authorization } = {}) {
    return omitNil({
        Authorization,
    });
}

/**
 * @param {AddressData} data
 * @return {Object}
 */
function mapToAddress({ billingAddress = {} }) {
    const {
        addressLine1: address_line_1,
        addressLine2: address_line_2,
        city,
        company,
        countryCode: country_code,
        email,
        firstName: first_name,
        lastName: last_name,
        phone,
        postCode: postal_code,
        provinceCode,
        province,
    } = billingAddress;

    const state = mapToState(provinceCode, province);

    return omitNil({
        address_line_1,
        address_line_2,
        city,
        company,
        country_code,
        email,
        first_name,
        last_name,
        phone,
        postal_code,
        state,
    });
}

/**
 * @param {string} code
 * @param {string} name
 * @return {Object}
 */
function mapToState(code, name) {
    return omitNil({
        code,
        name,
    });
}

/**
 * @param {Object} data
 * @param {CreditCard} data.creditCard
 * @return {Object}
 */
function mapToCreditCard({ creditCard = {} }) {
    const {
        cardholderName: cardholder_name,
        number,
        month,
        year,
        verificationCode: verification_code,
        issueMonth: issue_month,
        issueYear: issue_year,
        issueNumber: issue_number,
        trackData: track_data,
        isManualEntry: is_manual_entry,
        iccData: icc_data,
        fallbackReason: fallback_reason,
        isContactless: is_contactless,
        encryptedPinCryptogram: encrypted_pin_cryptogram,
        encryptedPinKsn: encrypted_pin_ksn,
    } = creditCard;

    const threeDSecure = mapToThreeDSecure(creditCard);

    return omitNil({
        cardholder_name,
        number,
        month,
        year,
        verification_code,
        issue_month,
        issue_year,
        issue_number,
        track_data,
        is_manual_entry,
        icc_data,
        fallback_reason,
        is_contactless,
        encrypted_pin_cryptogram,
        encrypted_pin_ksn,
        three_d_secure: threeDSecure,
    });
}

/**
 * @param {ThreeDSecure} data
 * @return {ThreeDSecure}
 */
function mapToThreeDSecure({ threeDSecure = {} }) {
    const {
        version,
        status,
        vendor,
        cavv,
        eci,
        xid,
    } = threeDSecure;

    return omitNil({
        version,
        status,
        vendor,
        cavv,
        eci,
        xid,
    });
}
