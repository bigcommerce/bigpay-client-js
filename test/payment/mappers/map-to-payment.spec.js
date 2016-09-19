import * as mapToCreditCardModule from '../../../src/payment/mappers/map-to-credit-card';
import mapToPayment from '../../../src/payment/mappers/map-to-payment';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToPayment', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;

        spyOn(mapToCreditCardModule, 'default').and.returnValue('creditCard');
    });

    it('should map to payment', () => {
        const output = mapToPayment(data);

        expect(output).toEqual({
            credit_card_token: {
                token: data.payment.nouce,
            },
            credit_card: 'creditCard',
            device_info: data.payment.deviceData,
            gateway: data.paymentMethod.id,
            notify_url: data.order.callbackUrl,
        });
    });
});
