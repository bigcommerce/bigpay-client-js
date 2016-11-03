import merge from 'lodash/merge';
import * as mapToCreditCardModule from '../../../src/payment/mappers/map-to-credit-card';
import mapToPayment from '../../../src/payment/mappers/map-to-payment';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToPayment', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;

        spyOn(mapToCreditCardModule, 'default').and.returnValue('creditCard');
    });

    it('should map to payment with credit card data', () => {
        const output = mapToPayment(data);

        expect(output).toEqual({
            credit_card: 'creditCard',
            device_info: data.quoteMeta.request.deviceSessionId,
            gateway: data.paymentMethod.id,
            notify_url: data.order.callbackUrl,
        });
    });

    it('should map to payment with credit card token data', () => {
        data = merge({}, data, {
            paymentMethod: {
                nonce: 'abc123',
            },
        });

        const output = mapToPayment(data);

        expect(output).toEqual({
            credit_card_token: {
                token: data.paymentMethod.nonce,
            },
            device_info: data.quoteMeta.request.deviceSessionId,
            gateway: data.paymentMethod.id,
            notify_url: data.order.callbackUrl,
        });
    });
});
