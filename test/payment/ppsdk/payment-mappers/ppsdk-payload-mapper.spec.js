import PpsdkPayloadMapper from '../../../../src/payment/ppsdk/payment-mappers/ppsdk-payload-mapper';
import paymentRequestDataMock, { paymentRequestWithAdditionalActionMock } from '../../../mocks/payment-request-data';

describe('PpsdkPayloadMapper', () => {
    let data;
    let payloadMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;

        payloadMapper = new PpsdkPayloadMapper();
    });

    it('creates an instance of PpsdkPayloadMapper', () => {
        const instance = PpsdkPayloadMapper.create();

        expect(instance instanceof PpsdkPayloadMapper).toBeTruthy();
    });

    it('maps the input data into a payload for submitting a payment', () => {
        const output = payloadMapper.mapToPayload(data);

        expect(output).toEqual({
            instrument: {
                expires: {
                    month: 1,
                    year: 2018,
                },
                name: 'Foo Bar',
                number: '4007000000027',
                verification_value: '123',
                type: 'card',
            },
            form_nonce: 'fakeHostedFormNonce',
            payment_method_id: 'paypalprous',
        });
    });

    it('maps the input data into a payload with human verification data when required for submitting a payment', () => {
        const dataWithAdditionalAction = paymentRequestWithAdditionalActionMock;

        const output = payloadMapper.mapToPayload(dataWithAdditionalAction);

        expect(output).toEqual({
            instrument: {
                expires: {
                    month: 1,
                    year: 2018,
                },
                name: 'Foo Bar',
                number: '4007000000027',
                verification_value: '123',
                type: 'card',
            },
            form_nonce: 'fakeHostedFormNonce',
            human_verification: {
                id: 'recaptcha_v2_verification',
                parameters: {
                    token: 'googleRecaptchaToken',
                },
            },
            payment_method_id: 'paypalprous',
        });
    });

    it('maps the input data into an object containing http headers required for submitting a payment', () => {
        const output = payloadMapper.mapToHeaders(data);

        expect(output).toEqual({
            Authorization: data.authToken,
        });
    });
});
