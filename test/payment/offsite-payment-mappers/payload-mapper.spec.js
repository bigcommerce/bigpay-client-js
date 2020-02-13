import omit from 'lodash/omit';
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
        data = merge({}, paymentRequestDataMock, {
            paymentMethod: {
                gateway: 'Adyen',
            },
        });

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
            mapToId: jasmine.createSpy('mapToId').and.returnValue(data.paymentMethod.gateway),
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
            return_url: data.paymentMethod.returnUrl,
            shippingAddress: 'shippingAddress',
            store: 'store',
        });

        document.title = '';
    });

    it('cleans the authToken if it contains more than one token', () => {
        data = merge({}, paymentRequestDataMock, {
            authToken: 'aaa.bbb.ccc, ddd.eee.fff',
        });

        const output = payloadMapper.mapToPayload(data);

        expect(output.bc_auth_token).toEqual('aaa.bbb.ccc');
    });

    it('maps the formattedPayload fields if supplied', () => {
        data = merge({}, paymentRequestDataMock, {
            payment: {
                formattedPayload: {
                    sample_field: 'sample',
                },
            },
        });

        const output = payloadMapper.mapToPayload(data);

        expect(output.sample_field).toEqual('sample');
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

        const output = payloadMapper.mapToPayload(data);

        expect(output.return_url).toEqual(data.order.payment.returnUrl);
    });

    it('returns null as the return URL if both order and payment method are blank', () => {
        const output = payloadMapper.mapToPayload({
            order: { payment: {} },
            paymentMethod: {},
        });

        expect(output.return_url).toBeFalsy();
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
