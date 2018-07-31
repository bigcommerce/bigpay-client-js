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
        billing_address: mapToAddress(data.billingAddress),
        default_instrument,
    });
}

/**
 * @param {Object} [data={}]
 * @param {AddressData[]} data.shippingAddresses
 * @return {Object}
 */
export function mapToTrustedShippingAddressesPayload(data = {}) {
    return omitNil({
        shipping_addresses: mapToAddresses(data.shippingAddresses),
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
 * @param {AddressData[]} addresses
 * @return {Array}
 */
function mapToAddresses(addresses = []) {
    return addresses.map(address => mapToAddress(address));
}

/**
 * @param {AddressData} address
 * @return {Object}
 */
function mapToAddress(address = {}) {
    const state = mapToState(address.provinceCode, address.province);

    return omitNil({
        address_line_1: address.addressLine1,
        address_line_2: address.addressLine2,
        city: address.city,
        company: address.company,
        country_code: address.countryCode,
        email: address.email,
        first_name: address.firstName,
        last_name: address.lastName,
        phone: address.phone,
        postal_code: address.postCode,
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
    const threeDSecure = omitNil(creditCard.threeDSecure);

    return omitNil({
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
        three_d_secure: threeDSecure,
    });
}
