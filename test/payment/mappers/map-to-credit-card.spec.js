import mapToCreditCard from '../../../src/payment/mappers/map-to-credit-card';

describe('mapToCreditCard', () => {
    let data;

    beforeEach(() => {
        data = {
            payment: {
                ccCvv: 'payment.ccCvv',
                ccExpiry: {
                    month: 'payment.ccExpiry.month',
                    year: 'payment.ccExpiry.year',
                },
                ccName: 'payment.ccName',
                ccNumber: 'payment.ccNumber',
            },
        };
    });

    it('should map to billing address', () => {
        const output = mapToCreditCard(data);

        expect(output).toEqual({
            account_name: 'payment.ccName',
            issue_number: 'payment.ccNumber',
            month: 'payment.ccExpiry.month',
            verification_value: 'payment.ccCvv',
            year: 'payment.ccExpiry.year',
        });
    });
});
