import { omitEmpty } from '../../common/utils';

/**
 * Map to address
 * @param {PaymentRequestData} data
 * @param {string} addressKey
 * @returns {Object}
 */
export default function mapToAddress(data, addressKey) {
    const address = data[addressKey] || {};

    return omitEmpty({
        city: address.city,
        company: address.company,
        country_code: address.countryCode,
        country: address.country,
        first_name: address.firstName,
        last_name: address.lastName,
        phone: address.phone,
        state_code: address.provinceCode,
        state: address.province,
        street_1: address.addressLine1,
        street_2: address.addressLine2,
        zip: address.postCode,
    });
}
