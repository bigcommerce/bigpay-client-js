import mapToAddress from '../../../src/payment/mappers/map-to-address';

describe('mapToAddress', () => {
    let data;

    beforeEach(() => {
        data = {
            billingAddress: {
                addressLine1: 'address.addressLine1',
                addressLine2: 'address.addressLine2',
                city: 'address.city',
                company: 'address.company',
                country: 'address.country',
                countryCode: 'address.countryCode',
                firstName: 'address.firstName',
                lastName: 'address.lastName',
                phone: 'address.phone',
                postCode: 'address.postCode',
                province: 'address.province',
            },
        };
    });

    it('should map to billing address', () => {
        const output = mapToAddress(data, 'billingAddress');

        expect(output).toEqual({
            city: 'address.city',
            company: 'address.company',
            country_code: 'address.countryCode',
            country: 'address.country',
            first_name: 'address.firstName',
            last_name: 'address.lastName',
            phone: 'address.phone',
            state: 'address.province',
            street_1: 'address.addressLine1',
            street_2: 'address.addressLine2',
            zip: 'address.postCode',
        });
    });
});
