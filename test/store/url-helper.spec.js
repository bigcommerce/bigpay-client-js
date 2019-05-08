import UrlHelper from '../../src/store/url-helper';

describe('UrlHelper', () => {
    const host = 'https://bigpay.com';
    const storeId = '123';
    const shopperId = '456';
    const instrumentId = '789';
    const currencyCode = 'USD';

    let urlHelper;

    beforeEach(() => {
        urlHelper = new UrlHelper({ host });
    });

    it('creates an instance of UrlHelper', () => {
        const instance = UrlHelper.create({ host });

        expect(instance instanceof UrlHelper).toBeTruthy();
    });

    it('returns the correct host url', () => {
        expect(urlHelper.host).toBe('https://bigpay.com');
    });

    it('throws an error if host was not supplied', () => {
        urlHelper = new UrlHelper();

        expect(() => urlHelper.host).toThrow();

        urlHelper = new UrlHelper({});

        expect(() => urlHelper.host).toThrow();
    });

    it('returns a URL for submitting payments to an offsite provider', () => {
        const result = urlHelper.getInstrumentsUrl(storeId, shopperId, currencyCode);
        const expected = `${host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments?currency_code=${currencyCode}`;

        expect(result).toEqual(expected);
    });

    it('returns a URL for posting a trusted shipping address', () => {
        const result = urlHelper.getTrustedShippingAddressUrl(storeId, shopperId, currencyCode);
        const expected = `${host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments/trusted_shipping_address?currency_code=${currencyCode}`;

        expect(result).toEqual(expected);
    });

    it('returns a URL for generating a client token', () => {
        const result = urlHelper.getInstrumentByIdUrl(storeId, shopperId, instrumentId, currencyCode);
        const expected = `${host}/api/v2/stores/${storeId}/shoppers/${shopperId}/instruments/${instrumentId}?currency_code=${currencyCode}`;

        expect(result).toEqual(expected);
    });
});
