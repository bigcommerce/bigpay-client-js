import merge from 'lodash/merge';
import omit from 'lodash/omit';
import PaymentMapper from '../../../../src/payment/v1/payment-mappers/payment-mapper';
import paymentRequestDataMock from '../../../mocks/payment-request-data';

describe('PaymentMapper', () => {
    let data;
    let paymentMapper;
    let paymentMethodIdMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;

        paymentMethodIdMapper = {
            mapToId: jest.fn(() => data.paymentMethod.id),
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
                customer_code: data.payment.ccCustomerCode,
                three_d_secure: data.payment.threeDSecure,
                hosted_form_nonce: data.payment.hostedFormNonce,
            },
            device: {
                fingerprint_id: data.orderMeta.deviceFingerprint,
            },
            device_info: data.payment.deviceSessionId,
            gateway: data.paymentMethod.id,
            notify_url: data.order.callbackUrl,
            return_url: data.paymentMethod.returnUrl,
            vault_payment_instrument: data.payment.shouldSaveInstrument,
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
            device: {
                fingerprint_id: data.orderMeta.deviceFingerprint,
            },
            device_info: data.payment.deviceSessionId,
            gateway: data.paymentMethod.id,
            notify_url: data.order.callbackUrl,
            return_url: data.paymentMethod.returnUrl,
            vault_payment_instrument: data.payment.shouldSaveInstrument,
        });
    });

    it('maps the input object into a payment object with cryptogram', () => {
        data = merge({}, data, {
            payment: {
                cryptogramId: 'cryptogram123',
                eci: 'eci123',
                transactionId: 'transaction123',
                accountMask: 'accountMask123',
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output.cryptogramId).toBeUndefined();
        expect(output).toEqual(
            expect.objectContaining({
                device: {
                    fingerprint_id: data.orderMeta.deviceFingerprint,
                },
                device_info: data.payment.deviceSessionId,
                gateway: data.paymentMethod.id,
                notify_url: data.order.callbackUrl,
                return_url: data.paymentMethod.returnUrl,
                credit_card_cryptogram: {
                    payment_cryptogram: data.payment.cryptogramId,
                    eci: data.payment.eci,
                    xid: data.payment.transactionId,
                    number: data.payment.ccNumber,
                    month: parseInt(data.payment.ccExpiry.month, 10),
                    year: parseInt(data.payment.ccExpiry.year, 10),
                    account_mask: data.payment.accountMask,
                },
            }),
        );
    });

    it('maps the input object into a payment object with cryptogram without expiration', () => {
        data = merge({}, data, {
            payment: {
                cryptogramId: 'cryptogram123',
                eci: 'eci123',
                transactionId: 'transaction123',
                ccNumber: 'aa',
                ccExpiry: null,
                accountMask: 'accountMask123',
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output.cryptogramId).toBeUndefined();
        expect(output).toEqual(
            expect.objectContaining({
                device: {
                    fingerprint_id: data.orderMeta.deviceFingerprint,
                },
                device_info: data.payment.deviceSessionId,
                gateway: data.paymentMethod.id,
                notify_url: data.order.callbackUrl,
                return_url: data.paymentMethod.returnUrl,
                credit_card_cryptogram: {
                    payment_cryptogram: data.payment.cryptogramId,
                    eci: data.payment.eci,
                    xid: data.payment.transactionId,
                    number: data.payment.ccNumber,
                    account_mask: data.payment.accountMask,
                },
            }),
        );
    });

    it('maps vaulting data to the payload', () => {
        data = merge({}, data, {
            payment: {
                shouldSaveInstrument: true,
                instrumentId: 'token1',
                ccCvv: '123',
                three_d_secure: { token: 'aaa.bbb.ccc' },
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output.vault_payment_instrument).toBeUndefined();
        expect(output).toEqual(
            expect.objectContaining({
                device: {
                    fingerprint_id: data.orderMeta.deviceFingerprint,
                },
                device_info: data.payment.deviceSessionId,
                gateway: data.paymentMethod.id,
                notify_url: data.order.callbackUrl,
                return_url: data.paymentMethod.returnUrl,
                bigpay_token: {
                    token: data.payment.instrumentId,
                    verification_value: data.payment.ccCvv,
                    credit_card_number_confirmation: data.payment.ccNumber,
                    three_d_secure: data.payment.three_d_secure,
                },
            }),
        );
    });

    it('maps requests for vaulted instrument to be made default', () => {
        data = merge({}, data, {
            payment: {
                shouldSaveInstrument: true,
                instrumentId: 'token1',
                ccCvv: '123',
                three_d_secure: { token: 'aaa.bbb.ccc' },
                shouldSetAsDefaultInstrument: true,
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output).toEqual(
            expect.objectContaining({
                set_as_default_stored_instrument: true,
            }),
        );
    });

    it('maps requests for instrument to be vaulted', () => {
        data = merge({}, data, {
            payment: {
                shouldSaveInstrument: true,
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output.bigpay_token).toBeUndefined();
        expect(output).toEqual(
            expect.objectContaining({
                vault_payment_instrument: data.payment.shouldSaveInstrument,
            }),
        );
    });

    it('maps requests for instrument to be vaulted AND made default', () => {
        data = merge({}, data, {
            payment: {
                shouldSaveInstrument: true,
                shouldSetAsDefaultInstrument: true,
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output).toEqual(
            expect.objectContaining({
                set_as_default_stored_instrument: true,
            }),
        );
    });

    it('ignores requests to set non-vaulted instruments as default', () => {
        data = merge({}, data, {
            payment: {
                instrumentId: undefined,
                shouldSetAsDefaultInstrument: true,
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output).not.toEqual(
            expect.objectContaining({
                set_as_default_stored_instrument: true,
            }),
        );
    });

    it('ignores requests to set an instrument that is not about to be vaulted, as default', () => {
        data = merge({}, data, {
            payment: {
                shouldSaveInstrument: false,
                shouldSetAsDefaultInstrument: true,
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output).not.toEqual(
            expect.objectContaining({
                set_as_default_stored_instrument: true,
            }),
        );
    });

    it('maps the input object into a payment object with method', () => {
        data = merge({}, data, {
            paymentMethod: {
                method: 'paypal',
            },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output).toEqual(expect.objectContaining({
            method: data.paymentMethod.method,
        }));
    });

    it('uses the return URL contained in the order object as a fallback', () => {
        data = merge({}, data, {
            order: {
                payment: {
                    returnUrl: '/checkout',
                },
            },
            paymentMethod: omit(data.paymentMethod, 'returnUrl'),
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output.return_url).toEqual(data.order.payment.returnUrl);
    });

    it('returns null as the return URL if both order and payment method are blank', () => {
        const output = paymentMapper.mapToPayment({
            order: { payment: {} },
            paymentMethod: {},
        });

        expect(output.return_url).toBeFalsy();
    });

    it('returns an empty object if the input does not contain information related to payment', () => {
        paymentMethodIdMapper.mapToId.mockReturnValueOnce(null);

        expect(paymentMapper.mapToPayment({})).toEqual({ credit_card: {} });
    });

    it('uses formattedPayload when provided', () => {
        data = merge({}, data, {
            payment: { formattedPayload: { credit_card_token: { token: '12356aaa' } } },
        });

        const output = paymentMapper.mapToPayment(data);

        expect(output).toEqual(
            expect.objectContaining({
                credit_card_token: {
                    token: '12356aaa',
                },
            }),
        );
    });
});
