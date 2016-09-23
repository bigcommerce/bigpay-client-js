import { toSnakeCase } from '../../common/utils';

/**
 * Map to address
 * @param {PaymentRequestData} data
 * @param {string} addressKey
 * @returns {Object}
 */
export default function mapToAddress(data, addressKey) {
    const address = data[addressKey] || {};
    const formattedAddressKey = toSnakeCase(addressKey);

    return {
        [`${formattedAddressKey}_city`]: address.city,
        [`${formattedAddressKey}_company`]: address.company,
        [`${formattedAddressKey}_country_code`]: address.countryCode,
        [`${formattedAddressKey}_country`]: address.country,
        [`${formattedAddressKey}_first_name`]: address.firstName,
        [`${formattedAddressKey}_last_name`]: address.lastName,
        [`${formattedAddressKey}_phone`]: address.phone,
        [`${formattedAddressKey}_state_code`]: address.provinceCode,
        [`${formattedAddressKey}_state`]: address.province,
        [`${formattedAddressKey}_street_1`]: address.addressLine1,
        [`${formattedAddressKey}_street_2`]: address.addressLine2,
        [`${formattedAddressKey}_zip`]: address.postCode,
    };
}
