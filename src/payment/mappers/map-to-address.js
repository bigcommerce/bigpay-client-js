/**
 * Map to address
 * @param {PaymentInputData} inputData
 * @param {string} addressKey
 * @returns {Object}
 */
export default function mapToAddress(inputData, addressKey) {
    const address = inputData[addressKey] || {};

    return {
        city: address.city,
        company: address.company,
        country_code: address.countryCode,
        country: address.country,
        first_name: address.firstName,
        last_name: address.lastName,
        phone: address.phone,
        state_code: address.province,
        state: address.province,
        street_1: address.addressLine1,
        street_2: address.addressLine2,
        zip: address.postCode,
    };
}
