import {
    authTokenMock,
    instrumentRequestDataMock,
    trustedShippingAddressesDataMock,
} from '../../../mocks/store-instrument-data';
import {
    mapToInstrumentPayload,
    mapToHeaders,
    mapToTrustedShippingAddressesPayload,
} from '../../../../src/store/v2/mappers';

describe('StoreMapper', () => {
    let headerData;

    beforeEach(() => {
        headerData = { authToken: authTokenMock };
    });

    it('maps an auth token to a header compatible object', () => {
        const result = mapToHeaders(headerData);
        const expected = jasmine.objectContaining({
            Authorization: authTokenMock,
        });

        expect(result).toEqual(expected);
    });

    it('returns an empty header object if auth token was not provided', () => {
        const result = mapToHeaders();
        const expected = {};

        expect(result).toEqual(expected);
    });

    it('maps the input object into a instrument object', () => {
        const {
            creditCard,
            billingAddress,
            providerName,
            defaultInstrument,
        } = instrumentRequestDataMock;

        const result = mapToInstrumentPayload(instrumentRequestDataMock);
        const expected = jasmine.objectContaining({
            provider: {
                name: providerName,
            },
            credit_card: {
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
                three_d_secure: creditCard.threeDSecure,
            },
            billing_address: {
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
                state: {
                    code: billingAddress.provinceCode,
                    name: billingAddress.province,
                },
            },
            default_instrument: defaultInstrument,
        });

        expect(result).toEqual(expected);
    });

    it('maps the input object into a trusted shipping address object', () => {
        const { shippingAddresses } = trustedShippingAddressesDataMock;

        const result = mapToTrustedShippingAddressesPayload(trustedShippingAddressesDataMock);
        const expected = jasmine.objectContaining({
            shipping_addresses: [{
                address_line_1: shippingAddresses[0].addressLine1,
                address_line_2: shippingAddresses[0].addressLine2,
                city: shippingAddresses[0].city,
                company: shippingAddresses[0].company,
                country_code: shippingAddresses[0].countryCode,
                email: shippingAddresses[0].email,
                first_name: shippingAddresses[0].firstName,
                last_name: shippingAddresses[0].lastName,
                phone: shippingAddresses[0].phone,
                postal_code: shippingAddresses[0].postCode,
                state: {
                    code: shippingAddresses[0].provinceCode,
                    name: shippingAddresses[0].province,
                },
            }],
        });

        expect(result).toEqual(expected);
    });

    it('accepts null and returns an empty shipping address object', () => {
        const result = mapToTrustedShippingAddressesPayload();
        const expected = {
            shipping_addresses: [],
        };

        expect(result).toEqual(expected);
    });

    it('accepts null and returns an empty payload object', () => {
        const result = mapToInstrumentPayload();
        const expected = {
            provider: {},
            credit_card: {},
            billing_address: {
                state: {},
            },
        };

        expect(result).toEqual(expected);
    });
});
