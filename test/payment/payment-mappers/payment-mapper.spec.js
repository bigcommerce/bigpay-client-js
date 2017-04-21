import merge from 'lodash/merge';
import PaymentMapper from '../../../src/payment/payment-mappers/payment-mapper';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('PaymentMapper', () => {
    let data;
    let paymentMapper;
    let paymentMethodIdMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;

        paymentMethodIdMapper = {
            mapToId: jasmine.createSpy('mapToId').and.returnValue(data.paymentMethod.id),
        };

        paymentMapper = new PaymentMapper(paymentMethodIdMapper);
    });

    it('creates an instance of PaymentMapper', () => {
        const instance = PaymentMapper.create();

        expect(instance instanceof PaymentMapper).toBeTruthy();
    });

    it('maps the input object into a payment object with credit card data', () => {
        const output = paymentMapper.mapToPayment(data);

        expect(output).toEqual({
            credit_card: {
                account_name: data.payment.ccName,
                number: data.payment.ccNumber,
                month: parseInt(data.payment.ccExpiry.month, 10),
                verification_value: data.payment.ccCvv,
                year: parseInt(data.payment.ccExpiry.year, 10),
            },
            device_info: data.quoteMeta.request.deviceSessionId,
            gateway: data.paymentMethod.id,
            notify_url: data.order.callbackUrl,
            return_url: data.order.payment.returnUrl,
        });
    });

    it('maps the input object into a payment object with credit card token', () => {
        data = merge({}, data, {
            paymentMethod: {
                nonce: 'abc123',
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output).toEqual({
            credit_card_token: {
                token: data.paymentMethod.nonce,
            },
            device_info: data.quoteMeta.request.deviceSessionId,
            gateway: data.paymentMethod.id,
            notify_url: data.order.callbackUrl,
            return_url: data.order.payment.returnUrl,
        });
    });

    it('returns an empty object if the input does not contain information related to payment', () => {
        paymentMethodIdMapper.mapToId.and.returnValue(null);

        expect(paymentMapper.mapToPayment({})).toEqual({ credit_card: {} });
    });
});
