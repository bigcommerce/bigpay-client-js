import UrlHelper from '../../src/payment/url-helper';

describe('UrlHelper', () => {
    let host;
    let urlHelper;

    beforeEach(() => {
        host = 'https://bigpay.com';
        urlHelper = new UrlHelper({ host });
    });

    it('creates an instance of UrlHelper', () => {
        const instance = UrlHelper.create({ host });

        expect(instance instanceof UrlHelper).toBeTruthy();
    });

    it('returns a URL for submitting payments to an API provider', () => {
        expect(urlHelper.getPaymentUrl()).toEqual(`${host}/api/public/v1/orders/payments`);
    });

    it('returns a URL for submitting PPSDK payments to a PPSDK provider', () => {
        expect(urlHelper.getPpsdkPaymentUrl()).toEqual(`${host}/payments`);
    });

    it('returns a URL for submitting payments to an offsite provider', () => {
        expect(urlHelper.getOffsitePaymentUrl()).toEqual(`${host}/pay/initialize`);
    });

    it('returns a URL for generating a client token', () => {
        expect(urlHelper.getGenerateClientTokenUrl()).toEqual(`${host}/api/v2/public/payments/client_tokens`);
    });
});
