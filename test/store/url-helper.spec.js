import UrlHelper from '../../src/store/url-helper';

describe('UrlHelper', () => {
    const host = 'https://bigpay.com';
    const storeId = '123';
    const shopperId = '456';
    const instrumentId = '789';

    let urlHelper;

    beforeEach(() => {
        urlHelper = new UrlHelper({ host });
    });

    it('creates an instance of UrlHelper', () => {
        const instance = UrlHelper.create({ host });

        expect(instance instanceof UrlHelper).toBeTruthy();
    });

    it('returns a URL for submitting payments to an offsite provider', () => {
        const result = urlHelper.getInstrumentsUrl(storeId, shopperId);
        const expected = `${host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments`;

        expect(result).toEqual(expected);
    });

    it('returns a URL for posting a trusted shipping address', () => {
        const result = urlHelper.getTrustedShippingAddressUrl(storeId, shopperId);
        const expected = `${host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments/trusted_shipping_address`;

        expect(result).toEqual(expected);
    });

    it('returns a URL for generating a client token', () => {
        const result = urlHelper.getInstrumentByIdUrl(storeId, shopperId, instrumentId);
        const expected = `${host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments/${instrumentId}`;

        expect(result).toEqual(expected);
    });
});
