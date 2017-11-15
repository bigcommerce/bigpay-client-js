import { mapToInstrumentPayload, mapToHeaders } from '../../../../src/store/v2/mappers';
import { instrumentRequestDataMock, authTokenMock } from '../../../mocks/store-instrument-data';

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
