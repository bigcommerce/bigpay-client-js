import paymentRequestDataMock from '../mocks/payment-request-data';
import PaymentIntentGenerator from '../../src/payment/payment-intent-generator';

describe('PaymentIntentGenerator', () => {
    let data;
    let urlHelper;
    let requestSender;
    let paymentIntentMapper;
    let paymentIntentGenerator;

    beforeEach(() => {
        data = paymentRequestDataMock;

        urlHelper = {
            getGeneratePaymentIntentUrl:
                jasmine.createSpy('getPaymentUrl').and.returnValue('/api/v2/public/payments/payment_intents'),
        };

        requestSender = {
            postRequest: jasmine.createSpy('postRequest'),
        };

        paymentIntentMapper = {
            mapToPaymentIntent: jasmine.createSpy('mapToPaymentIntent'),
        };

        paymentIntentGenerator = new PaymentIntentGenerator(urlHelper, requestSender, paymentIntentMapper);
    });

    it('Create an instance of PaymentIntentGenerator', () => {
        const config = { host: 'https://bigpay.dev' };
        const instance = PaymentIntentGenerator.create(config);

        expect(instance instanceof PaymentIntentGenerator).toBeTruthy();
    });

    it('Maps the input data into a payment intent object required to create a payment intent', () => {
        paymentIntentGenerator.generatePaymentIntent(data, () => {});

        expect(paymentIntentMapper.mapToPaymentIntent).toHaveBeenCalled();
    });
});
