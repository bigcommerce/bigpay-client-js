import mapToCreditCard from '../../../src/payment/mappers/map-to-credit-card';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToCreditCard', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to credit card', () => {
        const output = mapToCreditCard(data);

        expect(output).toEqual({
            account_name: data.payment.ccName,
            number: data.payment.ccNumber,
            month: parseInt(data.payment.ccExpiry.month, 10),
            verification_value: data.payment.ccCvv,
            year: parseInt(data.payment.ccExpiry.year, 10),
        });
    });
});
