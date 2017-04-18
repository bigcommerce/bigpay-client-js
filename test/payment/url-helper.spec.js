import UrlHelper from '../../src/payment/url-helper';

describe('UrlHelper', () => {
    let host;
    let urlHelper;

    beforeEach(() => {
        host = 'https://bigpay.com';
        urlHelper = new UrlHelper(host);
    });

    it('returns a URL for submitting payments to an API provider', () => {
        expect(urlHelper.getPaymentUrl()).toEqual(`${host}/api/public/v1/orders/payments`);
    });

    it('returns a URL for submitting payments to an offsite provider', () => {
        expect(urlHelper.getOffsitePaymentUrl()).toEqual(`${host}/pay/initialize`);
    });
});
