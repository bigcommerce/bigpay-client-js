import { omitNil, toSnakeCase } from '../../common/utils';

export default class AddressMapper {
    /**
     * @returns {AddressMapper}
     */
    static create() {
        return new AddressMapper();
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToBillingAddress(data) {
        return this.mapToAddress(data, 'billingAddress');
    }

    /**
     * @param {PaymentRequestData} data
     * @returns {Object}
     */
    mapToShippingAddress(data) {
        return this.mapToAddress(data, 'shippingAddress');
    }

    /**
     * @private
     * @param {PaymentRequestData} data
     * @param {string} addressKey
     * @returns {Object}
     */
    mapToAddress(data, addressKey) {
        const address = data[addressKey] || {};
        const formattedAddressKey = toSnakeCase(addressKey);

        return omitNil({
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
        });
    }
}
