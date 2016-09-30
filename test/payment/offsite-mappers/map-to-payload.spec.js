import merge from 'lodash/merge';
import * as mapToBillingAddressModule from '../../../src/payment/offsite-mappers/map-to-billing-address';
import * as mapToCustomerModule from '../../../src/payment/offsite-mappers/map-to-customer';
import * as mapToMetaModule from '../../../src/payment/offsite-mappers/map-to-meta';
import * as mapToShippingAddressModule from '../../../src/payment/offsite-mappers/map-to-shipping-address';
import * as mapToStoreModule from '../../../src/payment/offsite-mappers/map-to-store';
import mapToPayload from '../../../src/payment/offsite-mappers/map-to-payload';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToPayload', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;

        spyOn(mapToBillingAddressModule, 'default').and.returnValue({ billingAddress: 'billingAddress' });
        spyOn(mapToCustomerModule, 'default').and.returnValue({ customer: 'customer' });
        spyOn(mapToMetaModule, 'default').and.returnValue({ meta: 'meta' });
        spyOn(mapToShippingAddressModule, 'default').and.returnValue({ shippingAddress: 'shippingAddress' });
        spyOn(mapToStoreModule, 'default').and.returnValue({ store: 'store' });
    });

    it('should map to payload', () => {
        data = merge({}, data, {
            paymentMethod: {
                gateway: 'Adyen',
            },
        });

        const output = mapToPayload(data);

        expect(output).toEqual({
            amount: data.cart.grandTotal.integerAmount,
            bc_auth_token: data.authToken,
            billingAddress: 'billingAddress',
            currency: data.cart.currency,
            customer: 'customer',
            gateway: data.paymentMethod.gateway,
            meta: 'meta',
            notify_url: data.order.callbackUrl,
            order_id: data.order.orderId,
            payment_method_id: data.paymentMethod.id,
            reference_id: data.order.orderId,
            return_url: data.paymentMethod.config.redirectUrl,
            shippingAddress: 'shippingAddress',
            store: 'store',
        });
    });
});
