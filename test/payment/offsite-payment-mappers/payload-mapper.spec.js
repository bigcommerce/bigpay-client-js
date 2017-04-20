import merge from 'lodash/merge';
import PayloadMapper from '../../../src/payment/offsite-payment-mappers/payload-mapper';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('PayloadMapper', () => {
    let addressMapper;
    let customerMapper;
    let data;
    let metaMapper;
    let payloadMapper;
    let paymentMethodIdMapper;
    let storeMapper;

    beforeEach(() => {
        data = paymentRequestDataMock;

        addressMapper = {
            mapToBillingAddress: jasmine.createSpy('mapToBillingAddress').and.returnValue({ billingAddress: 'billingAddress' }),
            mapToShippingAddress: jasmine.createSpy('mapToShippingAddress').and.returnValue({ shippingAddress: 'shippingAddress' }),
        };

        customerMapper = {
            mapToCustomer: jasmine.createSpy('mapToCustomer').and.returnValue({ customer: 'customer' }),
        };

        metaMapper = {
            mapToMeta: jasmine.createSpy('mapToMeta').and.returnValue({ meta: 'meta' }),
        };

        paymentMethodIdMapper = {
            mapToId: jasmine.createSpy('mapToId').and.returnValue(data.paymentMethod.id),
        };

        storeMapper = {
            mapToStore: jasmine.createSpy('mapToStore').and.returnValue({ store: 'store' }),
        };

        payloadMapper = new PayloadMapper(addressMapper, customerMapper, metaMapper, paymentMethodIdMapper, storeMapper);
    });

    it('creates an instance of PayloadMapper', () => {
        const instance = PayloadMapper.create();

        expect(instance instanceof PayloadMapper).toBeTruthy();
    });

    it('maps the input data into a payload for submitting a payment to an offsite provider', () => {
        data = merge({}, data, {
            paymentMethod: {
                gateway: 'Adyen',
            },
        });

        document.title = 'Hello world';

        const output = payloadMapper.mapToPayload(data);

        expect(output).toEqual({
            amount: data.order.grandTotal.integerAmount,
            bc_auth_token: data.authToken,
            billingAddress: 'billingAddress',
            currency: data.order.currency,
            customer: 'customer',
            gateway: data.paymentMethod.gateway,
            meta: 'meta',
            notify_url: data.order.callbackUrl,
            order_id: data.order.orderId,
            page_title: document.title,
            payment_method_id: data.paymentMethod.id,
            reference_id: data.order.orderId,
            return_url: data.order.payment.returnUrl,
            shippingAddress: 'shippingAddress',
            store: 'store',
        });

        document.title = '';
    });

    it('returns an empty object if the input does not contain the required information', () => {
        addressMapper.mapToBillingAddress.and.returnValue({});
        addressMapper.mapToShippingAddress.and.returnValue({});
        customerMapper.mapToCustomer.and.returnValue({});
        metaMapper.mapToMeta.and.returnValue({});
        paymentMethodIdMapper.mapToId.and.returnValue(null);
        storeMapper.mapToStore.and.returnValue({});

        expect(payloadMapper.mapToPayload({})).toEqual({});
    });
});
